"use client"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <nav className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-5 w-full relative flex items-center justify-between border-b-[1px] border-[#65646499] shadow-[0_1px_5px_rgba(255,255,255,0.3)]">
      <Link href="/" className="font-bold tracking-wide text-xl uppercase flex justify-center items-center gap-1">
        <Image
          src="/logo.png"
          alt="logo"
          height={35}
          width={35}
        />
        TechTales
      </Link>

         {/* Navigation Links (centered) */}
         <ul className="hidden md:flex gap-10 text-[#f2f2f4] font-semibold flex-grow justify-center">
  <li>
    <Link
      href="/"
      className={`text-lg transition-colors ${
        pathname === '/' ? 'dark:text-cyan-500 text-cyan-600 font-semibold' : 'dark:text-[#f2f2f4] text-black'
      }`}
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      href="/about" // Explicit path to the About page
      className={`text-lg transition-colors ${
        pathname === '/about' ? 'dark:text-cyan-500 text-cyan-600 font-semibold' : 'dark:text-[#f2f2f4] text-black'
      }`}
    >
      About
    </Link>
  </li>
  <li>
    <Link
      href="/contact" // Explicit path to the Contact page
      className={`text-lg transition-colors ${
        pathname === '/contact' ? 'dark:text-cyan-500 text-cyan-600 font-semibold' : 'dark:text-[#f2f2f4] text-black'
      }`}
    >
      Contact
    </Link>
  </li>
  <li>
    <Link
      href="/blogPage" // Explicit path to the Blog page
      className={`text-lg transition-colors ${
        pathname === '/blogPage' ? 'dark:text-cyan-500 text-cyan-600 font-semibold' : 'dark:text-[#f2f2f4] text-black'
      }`}
    >
      Blog
    </Link>
  </li>
</ul>
      
                {/* Mobile section */}
                <div className="flex justify-center items-center gap-3">
    <div className="relative md:hidden mt-1">
        <Sheet>
            <SheetTrigger className="dark:text-cyan-500 text-cyan-600">
                <FaBars size={24} className="" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#00000d] p-6 shadow-lg">
                <SheetHeader>
                    <SheetTitle className="text-lg font-semibold dark:text-cyan-500 text-cyan-600">
                        <div className="flex justify-center gap-2 items-center pt-8 pb-2">
                            <Image src="/logo.png" alt="logo" width={50} height={50} />
                            <span className="text-white uppercase">TechTales</span>
                        </div>
                    </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col justify-center items-center space-y-4 py-4">
                    {/* Home Link */}
                    <li>
                        <Link
                            href="/"
                            className={`text-lg transition-colors ${pathname === "/"
                                ? "dark:text-cyan-500 text-cyan-600 underline hover:text-cyan-500"
                                : "text-[#f2f2f4] dark:hover:text-cyan-500 hover:text-cyan-600"
                                }`}
                        >
                            Home
                        </Link>
                    </li>

                    {/* About Link */}
                    <li>
                        <Link
                            href="/about"
                            className={`text-lg transition-colors ${pathname === "/about"
                                ? "dark:text-cyan-500 text-cyan-600 underline hover:text-cyan-500"
                                : "text-[#f2f2f4] dark:hover:text-cyan-500 hover:text-cyan-600"
                                }`}
                        >
                            About
                        </Link>
                    </li>

                    {/* Contact Link */}
                    <li>
                        <Link
                            href="/contact"
                            className={`text-lg transition-colors ${pathname === "/contact"
                                ? "dark:text-cyan-500 text-cyan-600 underline hover:text-cyan-500"
                                : "text-[#f2f2f4] dark:hover:text-cyan-500 hover:text-cyan-600"
                                }`}
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Blog Page Link */}
                    <li>
                        <Link
                            href="/blogPage"
                            className={`text-lg transition-colors ${pathname === "/blogPage"
                                ? "dark:text-cyan-500 text-cyan-600 underline hover:text-cyan-500"
                                : "text-[#f2f2f4] dark:hover:text-cyan-500 hover:text-cyan-600"
                                }`}
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    </div>

    <ModeToggle />
</div>
    </nav>
  )
}

export default Navbar
