import { CiCalendar } from "react-icons/ci";
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { FaUserLarge } from 'react-icons/fa6'
import Link from "next/link";
import { Button } from "./ui/button";

const Blogs = () => {
  return (
    <main className="mt-10 mb-10">
         <h5 className="text-lg lg:text-2xl font-semibold text-cyan-500 text-center md:text-left flex gap-1 justify-center items-center">
                    <Image src="/logo.png" alt="logo" width="40" height="40" />Top Blogs
                </h5>


                {/* cards */}
             <div className="  rounded-lg grid  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
             <Card className="h-[500px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]  transition-all duration-300 ease-in-out hover:shadow-[0_8px_16px_rgba(255,255,255,0.6)]">
                <Image
                    src='/card1.jpg'
                    alt=''
                    width={300}
                    height={300}
                    className="w-full h-[200px] sm:h-[210px] rounded-t-lg"
                />
  <CardHeader>

  <CardContent>
  <div className="flex justify-center items-center   gap-2 sm:gap-12">
         <p className="text-sm flex items-center   text-cyan-500">
         <CiCalendar /> 12/4/2024
                   </p>
                   
                   <p className="text-sm flex items-center justify-center gap-1 text-cyan-500">
                   <FaUserLarge /> By Umm e Habiba
                   </p>
                   </div>
   </CardContent>
    <CardTitle> The Future of AI: How Artificial Intelligence is Shaping the Future of Development</CardTitle>
    <CardDescription>How AI is shaping the future of technology and automation.</CardDescription>
  </CardHeader>
  <CardContent>
  <Button asChild className="w-full ">
                <Link href='/blog/my-4th-website-blog' className="bg-blue-600 hover:bg-blue-400">Read More</Link>
              </Button>
  </CardContent>
</Card>

<Card className="h-[500px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]  transition-all duration-300 ease-in-out hover:shadow-[0_8px_16px_rgba(255,255,255,0.6)]">
                <Image
                    src='/card2.jpg'
                    alt=''
                    width={300}
                    height={300}
                    className="w-full h-[200px] sm:h-[210px] rounded-t-lg"
                />
  <CardHeader>

  <CardContent>
  <div className="flex justify-center items-center  gap-2 sm:gap-12">
         <p className="text-sm flex items-center justify-center gap-1 text-cyan-500">
         <CiCalendar /> 12/4/2024
                   </p>
                   
                   <p className="text-sm flex items-center justify-center gap-1 text-cyan-500">
                   <FaUserLarge /> By Umm e Habiba
                   </p>
                   </div>
   </CardContent>
    <CardTitle> Cloud Computing: Transforming the Future of IT</CardTitle>
    <CardDescription>The impact of cloud technology on businesses and individuals.</CardDescription>
  </CardHeader>
  <CardContent>
  <Button asChild className="w-full ">
                <Link href='/blog/my-3rd-blog' className="bg-blue-600 hover:bg-blue-400">Read More</Link>
              </Button>
  </CardContent>
</Card>


<Card className="h-[500px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]  transition-all duration-300 ease-in-out hover:shadow-[0_8px_16px_rgba(255,255,255,0.6)]">
                <Image
                    src='/card3.jpg'
                    alt=''
                    width={300}
                    height={300}
                    className="w-full h-[200px] sm:h-[210px] rounded-t-lg"
                />
  <CardHeader>

  <CardContent>
  <div className="flex justify-center items-center  gap-2 sm:gap-12">
         <p className="text-sm flex items-center justify-center gap-1 text-cyan-500">
         <CiCalendar /> 12/4/2024
                   </p>
                   
                   <p className="text-sm flex items-center justify-center gap-1 text-cyan-500">
                   <FaUserLarge /> By Umm e Habiba
                   </p>
                   </div>
   </CardContent>
    <CardTitle> The Future of Software Development: Trends & Predictions</CardTitle>
    <CardDescription>Building robust and scalable software solutions to help businesses grow.</CardDescription>
  </CardHeader>
  <CardContent>
  <Button asChild className="w-full ">
                <Link href='/blog/my-2nd-blog' className="bg-blue-600 hover:bg-blue-400">Read More</Link>
              </Button>
  </CardContent>
</Card>
             </div>


            <div className="flex justify-center">
            <Button asChild className="transition-all duration-300 hover:scale-105 mt-20 px-6 py-6 bg-cyan-600  dark:bg-cyan-500 font-bold text-lg ">
                <Link href='/blog/my-4th-website-blog' className="bg-blue-600 hover:bg-blue-400">Read More</Link>
              </Button>
            </div>
    </main>
  )
}

export default Blogs