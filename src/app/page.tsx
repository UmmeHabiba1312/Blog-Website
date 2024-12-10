// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { simpleBlogCard } from "@/lib/interface";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import Link from "next/link";
// async function getData() {
// const query = `*[_type == "blog"] | order(_createdAt desc){
//   title,
//   description,
//     "CurrentSlug":slug.current,
//     titleImage,
// }`;

import HeroSection from "@/components/Hero";
import AboutSec from "@/components/about";
import Blogs from "@/components/blog";
import ContactPage from "./contact/page";

// const data = await client.fetch(query);

// return data;
// }



export default async function Home() {
  // const data:simpleBlogCard[] = await getData();
  // console.log(data);
  return (
  //   <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
  //         {data.map((post,idx) =>(
  //          <Card key={idx}>
  //           <Image
  //           className="rounded-t-lg h-[200px] object-cover "
  //           height={500}
  //           width={500}
  //           src={urlFor(post.titleImage).url()}
  //           alt="image"/>

  //           <CardContent>
  //             <h1 className=" line-clamp-2 font-bold text-lg">
  //               {post.title}
  //             </h1>
  //             <p className="line-clamp-3 text-sm mt-3 text-gray-600 dark:text-gray-300">
  //               {post.description}
  //             </p>
  //             <Button asChild className="w-full mt-7">
  //               <Link href={`/blog/${post.CurrentSlug}`} className="bg-blue-600 hover:bg-blue-400">Read More</Link>
  //             </Button>
  //           </CardContent>
  //          </Card>
  //  )
  //  )}
        
  //   </main>
  <main>

    <HeroSection/>
    <AboutSec/>
    <Blogs/>
    <ContactPage/>

  </main>
  );
}
