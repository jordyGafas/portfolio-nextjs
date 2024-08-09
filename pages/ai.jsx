import Image from "next/image";
import React, { useState, useEffect } from "react";
import gafasImg from "../public/assets/projects/gafas.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("1AIzaSyATRtylab5HNuoGDty7x-0Z0WAWM54cVrk");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const AI = () => {
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
      // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [],
    });

    const result = await chatSession.sendMessage("Give me a short information about Belgium");
    console.log(result.response.text());
  }

  useEffect(() => {
    //run();
  }, []);

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image className="absolute z-1" layout="fill" objectFit="cover" src={gafasImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-400 z-10 p-2">
          <h2 className="py-2">Agency website - By Gafas</h2>
          <h3>Wordpress / php / css / JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8"></div>
    </div>
  );
};

export default AI;
