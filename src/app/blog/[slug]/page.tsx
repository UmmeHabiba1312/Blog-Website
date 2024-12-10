import { fullBlog } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getData(slug: string){
    const query = `*[_type == 'blog' && slug.current == '${slug}']{
  "CurrentSlug" : slug.current,
    title,
    content,
    titleImage
}[0]`

const data = await client.fetch(query);

return data;
}



export default async function BlogArticle({params}:{params : {slug:string}}) {
    const data:fullBlog = await getData(params.slug);
    console.log("Content",data.content);
    
    return (
        <div className="mt-8">
            <h1>
                <span className="block font-semibold uppercase tracking-wide text-blue-600 text-center text-primary">Umm e Habiba-Blog</span>
                <span className="mt-2 text-3xl text-center font-bold block tracking-tight leading-8 sm:text-4xl">{data.title}</span>
            </h1>

            <Image src={urlFor(data.titleImage).url()}
             alt="image"
              height={200}
               width={800}
               priority
                className="rounded-lg mt-8 border text-center block"/>

                <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-headings:underline prose-a:text-blue-700 prose-li:text-blue-700">
                    <PortableText value={data.content}/>
                </div>
        </div>
    )
}