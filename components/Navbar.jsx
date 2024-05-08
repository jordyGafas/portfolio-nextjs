import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
//import NavLogo from '../public/assets/navLogo.png'
import NavLogo from "../public/assets/leytech.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
const [navBg, setNavBg] = useState("rgba(30, 54, 89, .9)");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    if(!nav){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'initial';
    }
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div style={{ backgroundColor: `${navBg}` }} className={` p-5 w-[95%] left-[2.5%] mt-5 rounded-full fixed h-10 md:h-20 shadow-sm z-[100] ease-in-out duration-300 max-w-[1240px]"`}>
      <div className="flex justify-between items-center w-full h-full px-2">
        <Link href="/">
          <a>
            <span className="font-medium text-lg md:text-2xl"> LeyTech</span>
          </a>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div style={{height: "100dvh"}} className={nav ? "md:hidden fixed left-0 top-0 w-full bg-black/70 ease-in duration-300" : ""}>
        {/* Side Drawer Menu */}
        <div style={{height: "100dvh"}} className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#0F0C18] p-10 ease-in duration-300" : "fixed left-[-100%] w-0 top-0 p-10 bg-[#0F0C18] ease-in duration-300"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <span className="text-sky-700 font-medium text-xl"> LeyTech</span>
                </a>
              </Link>
              <div onClick={handleNav} className="rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let&#39;s build something legendary together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-sky-700">Let&#39;s Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/jordy-leysen-a774b3a5" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <Link href="/#contact">
                  <div onClick={() => setNav(!nav)} className="rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div onClick={() => setNav(!nav)} className="rounded-full shadow-sm shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
