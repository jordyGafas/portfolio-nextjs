import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import BG from "../public/assets/bg.png";

const Main = ({ upper, title, title2, name, subTitle }) => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <video autoPlay loop muted controls={false} playsInline className="absolute z-10 min-w-full min-h-full max-w-none opacity-60 left-0 top-0 object-cover w-full">
        <source src="https://assets.mixkit.co/videos/41640/41640-720.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10">
        <div>
          <p className="uppercase text-sm  tracking-widest text-slay-600">{upper}</p>
          <h1 className="py-4 text-gray-300">
            {title}
            <span className="text-sky-700"> {name}</span>
          </h1>
          <h1 className="py-2 text-gray-300">{title2}</h1>
          <p className="py-4 text-slay-600 sm:max-w-[70%] m-auto ">{subTitle}</p>
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

Main.defaultProps = {
  upper: "LET'S BUILD SOMETHING TOGETHER",
  name: "Jordy",
  title: "Hi, I'm ",
  title2: " A Front-End Web Developer",
  subTitle: "I’m focused on building responsive front-end web applications integrating back-end technologies. Available for freelance & consultency.",
};
