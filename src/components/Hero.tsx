"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import Hand from "../assets/Hand.json";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center  justify-center gap-4"
    >
      <div>
        <Image
          src={assets.profile_img2}
          alt="#"
          className="rounded-full w-32 "
        />
      </div>
      <h3 className="flex items-center gap-2 text-xl md:text-2xl md-3 font-ovo ">
        <div className="animated-text">
          Hi! I&apos;m <span></span>
        </div>
        {/* <Image src={assets.hand_icon} alt="" className="w-6 animate-dance" /> */}
        <Lottie animationData={Hand} className="w-10" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Fullstack Developer Based In Bangladesh
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        {" "}
        I am a fullstack developer from Barishal,Bangladesh with 1.5 year of
        experience in multiple company like SoftKarrot and NexStack Pte Ltd.
      </p>
      <div className=" flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="#conatct-me"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:text-black hover:bg-lightHover duration-500 hover:border-orange-300"
        >
          Contact me
          <GoArrowRight />
        </Link>
        <a
          href="/resume.pdf"
          download="Masud Rana Resume"
          className="px-10 py-3 border hover:border-orange-300 duration-500 rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white "
        >
          My resume
          <Image src={assets.download_icon} alt="#" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
