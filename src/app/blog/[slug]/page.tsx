import { fullBlog } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Head from "next/head";

async function getData(slug: string) {
    if (!slug) {
        throw new Error("Slug is missing or undefined");
    }

    const query = `*[_type == 'blog' && slug.current == $slug]{
        "CurrentSlug": slug.current,
        title,
        content,
        titleImage
    }[0]`;

    const data = await client.fetch(query, { slug });

    if (!data) {
        throw new Error(`No blog found for slug: ${slug}`);
    }

    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    try {
        // Fetch the blog data
        const data: fullBlog = await getData(params.slug);

        return (
            <div className="mt-8">
                {/* Add dynamic metadata */}
                <Head>
                    <title>{data.title}</title>
                    <meta name="description" content={`Read this blog: ${data.title}`} />
                </Head>

                {/* Blog Title */}
                <h1>
                    <span className="block font-semibold uppercase tracking-wide text-blue-600 text-center text-primary">
                        Blog Post
                    </span>
                    <span className="mt-2 text-3xl text-center font-bold block tracking-tight leading-8 sm:text-4xl">
                        {data.title}
                    </span>
                </h1>

                {/* Blog Image */}
                <Image
                    src={urlFor(data.titleImage).url()}
                    alt={data.title}
                    height={500}
                    width={1200}
                    priority
                    className="rounded-lg mt-8 border w-full flex justify-center object-cover"
                />

                {/* Blog Content */}
                <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-headings:underline prose-a:text-blue-700 prose-li:text-blue-700">
                    <PortableText value={data.content} />
                </div>
            </div>
        );
    } catch (error) {
        // Handle the error gracefully
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";

        console.error("Error loading blog article:", errorMessage);

        return (
            <div className="text-center mt-8 text-red-500">
                <h1>Error</h1>
                <p>{errorMessage}</p>
            </div>
        );
    }
}
