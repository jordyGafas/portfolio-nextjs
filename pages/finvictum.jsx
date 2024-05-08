import Image from "next/image";
import React from "react";
import finvictum from '../public/assets/projects/app-finvictum.jpeg'
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={finvictum} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 z-10 p-2">
          <h2 className="py-2">Finvictum App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I`m one of the founders od the start-up Finvitcum. Finvictum is a A dedicated investor relations social media platform for listed companies to inform, communicate and engage with investors
            and intermediaries.
          </p>
          <p>
            I helped building the project starting from an idea. I mainly designed the project in Figma and developed the platform in React Native and React. The app connects with a back-end deployed
            in Azure and is also using the Azure B2C MSAL library for authentication. It also uses firebase for Push notifications.
          </p>
          <a href="https://finvictum.com/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 text-white">General Website</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-500 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase (push notifications)
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Azure (api, auth & deployment)
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
