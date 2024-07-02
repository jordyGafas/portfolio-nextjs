import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import profileImg from "../public/assets/profile.jpeg";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzbnonge");

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-sky-700">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-gray-500 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={profileImg} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Jordy Leysen</h2>
                <p>Front-End Developer</p>
                <p className="py-4">I am available for freelance and consultancy with a focus on helping start-ups. Contact me and let&apos;s talk.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.linkedin.com/in/jordy-leysen-a774b3a5" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-sm shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <div className="rounded-full shadow-sm shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <a>
                      <div className="rounded-full shadow-sm shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-sm shadow-gray-500 rounded-xl lg:p-4">
            <div className="p-4">
              {state.succeeded ? (
                <p className="flex justify-center content-center">Thank you for your submission!</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input required className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Phone Number</label>
                      <input className="border-2 rounded-lg p-3 flex border-gray-300" type="tel" name="phone" id="phone" />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input required className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" id="email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea required className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message" id="message"></textarea>
                  </div>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                  <button className="w-full p-4 text-gray-100 mt-4" type="submit" disabled={state.submitting}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-sm shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-sky-700" size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
