import Image from "next/image";
import React from "react";
import haachtImg from "../public/assets/projects/haacht.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={haachtImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 z-10 p-2">
          <h2 className="py-2">Brewery - By Upthrust</h2>
          <h3>Gatsby JS / React / Contentful cms</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This website was built using Gatsby.js and hosted on vercel. <br />
            Users can read info about their favorite beers or discover new products. They can also check out history, events, news, tap lessons and much more about Haacht Brewery.
            The client can adapt their site through the Contentful cms.
          </p>
          <a href="https://haacht.com" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 text-white">Website</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-500 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Gatsby JS
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Contentful cms
              </p>
              <p className="text-gray-300 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Maps API
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

export default property;
