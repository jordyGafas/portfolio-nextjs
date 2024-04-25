import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-sky-600">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-300">
            I finished my IT bachelor in 2018. Next I started developing websites on CMS platforms sush as Wordpress/woocommerce, Drupal, Lightspeed and Shopify.
            <br />
            <br />
            I have experience working with clients and bring designs all the way to deployed applications with the assistence of a team of developes, designers and project managers.
            <br />
            I like to build webshops with a focus on product, user experience and SEO.
            <br />
            In my spare time I help buiding and developing an ecosystem for a startup founded in 2022, Finvictum.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-300 underline cursor-pointer">Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-sm shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
