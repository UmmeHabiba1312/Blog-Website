import Image from "next/image";
import Button from "./Button";


export default function AboutSec() {
    return (
        <main className=" grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-[70vh] sm:h-screen flex justify-center items-center text-center">
                <div className="relative w-full h-[60vh] sm:h-screen flex justify-center items-center  lg:pt-8">
                    <div className="flex gap-0 sm:gap-8 lg:gap-12">
                        {/* <Image
                            src="/about1.jpg"
                            width={100}
                            height={450}
                            alt="hero1"
                            className="relative top-1/2 left-0 sm:left-10 pr-1 sm:pr-4 md:pr-1 lg:pr-4 transform  z-20 w-[70px] sm:w-[100px] md:w-[80px] lg:w-[110px] h-[300px] sm:h-[400px] md:h-[350px] lg:h-[450px]"
                        /> */}
                        <Image
                            src="/about1.jpg"
                            width={400}
                            height={450}
                            alt="hero3"
                            className="z-10 w-auto object-cover rounded-lg   h-[300px] sm:h-[380px] lg:h-[450px] flex  md:h-[350px]"
                        />
                    </div>

                    {/* Bottom Text */}
                </div>

            </div>
            {/* Left Side */}
            <div className="px-3 sm:px-8 py-10 md:px-6 md:py-8 lg:px-12 lg:py-16 flex flex-col justify-center items-center md:items-start">
                <h5 className="text-lg lg:text-2xl font-semibold text-cyan-500 text-center md:text-left flex gap-1 justify-center items-center">
                    <Image src="/logo.png" alt="logo" width="40" height="40" />About Me

                </h5>
               
                <p className="dark:text-[#f2f2f4] mt-4 md:mt-6 text-xs md:text-sm lg:text-base  text-justify md:text-left py-2">
               {` Hi! I'm `}<span className="text-cyan-500 font-semibold">Umm e Habiba</span>, a passionate full-stack developer with a deep love for building scalable, beautiful websites and web applications. My journey into tech started with a curiosity about how the web works and has since evolved into a full-fledged career.

I specialize in <span className="text-cyan-500 font-semibold">Next.js</span>, <span className="text-cyan-500 font-semibold">Tailwind CSS</span>  , <span className="text-cyan-500 font-semibold">Sanity</span>, and <span className="text-cyan-500 font-semibold">TypeScript</span>. I believe in creating seamless, intuitive user experiences while leveraging cutting-edge technologies. Every line of code I write is a reflection of my commitment to delivering high-quality and efficient solutions. My mission is
                </p>
                <div>
                    <h6 className="dark:text-[#f2f2f4]  text-sm md:text-base lg:text-lg mb-2 text-start"><span className="font-semibold bg-cyan-500  text-black mr-2 px-1 rounded-[50%]">✔</span> Helping Developers and Entrepreneurs Thrive</h6>
                    <h6 className="dark:text-[#f2f2f4] text-sm md:text-base lg:text-lg mb-2 text-start"><span className="font-semibold bg-cyan-500 text-black mr-2 px-1 rounded-[50%]">✔</span> Guiding Through Every Stage of Development</h6>
                    <h6 className="dark:text-[#f2f2f4]  text-sm md:text-base lg:text-lg text-start"><span className="font-semibold bg-cyan-500 text-black mr-2 px-1 rounded-[50%]">✔</span> Sharing Knowledge Through Tutorials, Blogs.
                    </h6>
                </div>

                <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row gap-4 mt-4 md:mt-6">
                    <Button text="Explore More" bgColour="#06b6d4" textColour="black" />
                </div>
            </div>


        </main>
    );
}