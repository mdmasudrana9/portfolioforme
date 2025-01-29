"use client";

import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { AboutProps } from "@/types/types";

const About = ({ isDarkMode }: AboutProps) => {
  if (isDarkMode === null) return null;
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg md-2 font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About</h2>

      <div className="flex w-full flex-col xl:flex-row items-center gap-20 my-20 ">
        <div className="flex-1">
          <p className="mb-10 md:max-w-6xl w-full font-ovo">
            I am an experienced Fullstack Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-auto gap-6  w-full ">
            {infoList.map(({ icon, title, iconDark, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 "
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="md:flex grid grid-cols-6 gap-2 items-center sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                // whileInView={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
