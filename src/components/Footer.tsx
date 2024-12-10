import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import Image from 'next/image'

const Footer = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
    <div className="mt-[60px] ">
     
      {/* <hr className="mt-8 border-gray-700" /> */}
  
      {/* Second Section */}
      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-6 lg:px-8 py-8">
        {/* Company Info */}
        <div className="grid  mt-80 md:mt-48 lg:mt-0 grid-cols-3 gap-8 w-full lg:w-[70%]">
          <div>
          <Link href="/" className="font-bold dark:text-cyan-500 text-cyan-600 tracking-wide text-xl uppercase flex justify-start items-center gap-1">
        <Image
          src="/logo.png"
          alt="logo"
          height={35}
          width={35}
        />
        TechTales
      </Link>
            <p className='mt-1'>
            At TechTrans, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.
            </p>
          </div>
          <div className='mt-2'>
            <p className="dark:text-cyan-500 text-cyan-600 font-extrabold"> We Offer</p>
            <p className="mt-2 dark:hover:text-cyan-500">Cloud Computing Solution</p>
            <p className="mt-2 dark:hover:text-cyan-500">Cybersecurity & Compliance</p>
            <p className="mt-2 dark:hover:text-cyan-500">Software Development</p>
            <p className="mt-2 dark:hover:text-cyan-500">IT Consulting & Support</p>
          </div>
          <div className='mt-2'>
            <p className="dark:text-cyan-500 text-cyan-600 font-extrabold">Usefull Links</p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/'>Home</Link></p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/about'>About</Link></p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/contact'>Contact</Link></p>
            <p className="mt-2   hover:text-cyan-500"><Link href='/blog'>Blog</Link></p>
          </div>
        </div>
  
        {/* Follow Us & Subscription */}
        <div className="mt-8 lg:mt-2 lg:w-[30%]">
          <h2 className=" dark:text-cyan-500 text-cyan-600 font-extrabold">Follow Us</h2>
          <div className="flex gap-4 mt-4 text-3xl ">
            <FaInstagram className='text-cyan-600 dark:text-cyan-500'/>
            <TiSocialFacebookCircular className='text-cyan-600 dark:text-cyan-500'/>
            <FaTwitter className='text-cyan-600 dark:text-cyan-500'/>
          </div>
          <p className=" mt-8">Receive exclusive offers in your mailbox</p>
          <div className="flex mt-4 gap-4">
            <div className="relative w-full max-w-sm">
              <IoMailSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-white" />
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full pl-12 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
            </div>
            <button className="p-3 bg-cyan-600 text-white font-bold rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>
  
      <hr className="border-gray-700" />
  
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm px-4 py-4">
        <p>
          All rights reserved <span className="font-bold">© TechTales, 2024</span>
        </p>
        <p>
          Made with 🤍 by <span className="font-bold">Umme Habiba</span>
        </p>
      </div>
    </div>
  </main>
  
  )
}

export default Footer