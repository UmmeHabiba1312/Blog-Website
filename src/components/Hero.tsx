import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
    return (
        <main className=" bg-cover bg-center grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="px-3  pt-6 pb-4  md:py-8  lg:py-16 flex flex-col justify-center items-center md:items-start order-2 md:order-1">
                <h5 className="text-2xl text-start sm:text-2xl lg:text-2xl font-bold text-cyan-600 dark:text-cyan-500 mt-4 sm:text-center md:text-left">
                Welcome to TechTales              </h5>
                <h1 className="text-2xl text-start sm:text-3xl lg:text-4xl font-bold dark:text-[#f2f2f4]  text-black mt-4 sm:text-center md:text-left">
                Shaping the Future with <span className="text-cyan-600 dark:text-cyan-500">Advanced Tech </span>Solutions

                </h1>
                <p className="dark:text-[#f2f2f4]  text-black mt-4 md:mt-6 text-xs sm:text-sm lg:text-base leading-relaxed text-justify md:text-left py-2">
{`                Welcome to my personal blog, where technology meets creativity! I share my journey as a developer, my passion for building amazing websites, and insights into the rapidly evolving world of tech. Whether you're a developer, entrepreneur, or simply a tech enthusiast, this blog is designed to inform, inspire, and provide useful resources for everyone interested in the world of development.
`}
{`Here, you will find everything from `}<span className="dark:text-cyan-500 font-semibold text-cyan-600">web development</span> tips and <span className="dark:text-cyan-500 font-semibold text-cyan-600">AI trends</span> to <span className="dark:text-cyan-500 font-semibold text-cyan-600">career advice</span> and <span className="dark:text-cyan-500 font-semibold text-cyan-600">tech tutorials</span>. I am excited to share my knowledge with you and help you navigate the ever-changing landscape of the tech world.
                </p>
                <div className="flex flex-col flex-wrap items-center justify-center lg:flex-row gap-4 mt-4 md:mt-6">
                    <Button text="Get Started Now" bgColour="#06b6d4" textColour="black" />
                    {/* <Button text="Watch Demo Video" bgColour="#1e182d" textColour="#f2f2f4" /> */}
                </div>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center justify-center mt-0 order-1 md:order-2">
                {/* Hero images stacked on top of each other */}
                <div className="relative flex justify-center items-center w-full h-[70vh] sm:h-screen">
                    {/* Hero 3: Bottom-most and Center */}
                    {/* <Image
                        src="/hernko.jpg"
                        width={450}
                        height={450}
                        alt="hero3"
                        className="absolute rounded-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[290px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px]"
                    /> */}

                    {/* Hero 1: Above Hero 3 */}
                    <Image
                        src="/hero.jpg"
                        width={450}
                        height={450}
                        alt="hero1"
                        className="absolute rounded-full object-cover  w-[300px] sm:w-[400px] lg:w-[500px] h-[350px]  sm:h-[450px]  lg:h-[500px]"
                    />

                    {/* Hero 2: Top-most */}
                    {/* <Image
                        src="/hero2.png"
                        width={300}
                        height={300}
                        alt="hero2"
                        className="absolute bottom-[10px] sm:bottom-[40px]  left-1/2 transform -translate-x-1/2 z-30 w-[200px] sm:w-[300px] h-[100px] sm:h-[130px] lg:h-[130px]"
                    /> */}
                </div>
            </div>
        </main>
    );
}