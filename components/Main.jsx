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
      <div style={{ backgroundImage: `url(${BG?.src})` }} className="absolute w-screen h-screen top-0 left-0 -z-10 opacity-20"></div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm  tracking-widest text-slay-600">LET&#39;S BUILD SOMETHING TOGETHER</p>
          <h1 className="py-4 text-gray-300">
            Hi, I&#39;m <span className="text-sky-700"> Jordy</span>
          </h1>
          <h1 className="py-2 text-gray-300">A Front-End Web Developer</h1>
          <p className="py-4 text-slay-600 sm :max-w-[70%] m-auto">I’m focused on building responsive front-end web applications integrating back-end technologies.</p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/clint-briley-50056920a/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/fireclint" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
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
