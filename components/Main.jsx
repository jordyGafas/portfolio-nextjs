import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import BG from "../public/assets/bg.png";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-60">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10">
        <div>
          <p className="uppercase text-sm  tracking-widest text-slay-600">LET&#39;S BUILD SOMETHING TOGETHER</p>
          <h1 className="py-4 text-gray-300">
            Hi, I&#39;m <span className="text-sky-700"> Jordy</span>
          </h1>
          <h1 className="py-2 text-gray-300">A Front-End Web Developer</h1>
          <p className="py-4 text-slay-600 sm :max-w-[70%] m-auto">I’m focused on building responsive front-end web applications integrating back-end technologies.</p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/jordy-leysen-a774b3a5" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-sm shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-sm shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-sm shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
