import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Jordy Leysen | Resume</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.jpeg" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <iframe src={'assets/profile.pdf'} style={{width:"100%", height:"calc(90dvh - 100px)"}} frameBorder="0"></iframe>
      </div>
    </>
  );
};

export default resume;
