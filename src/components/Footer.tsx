"use client";

import Image from "next/image";
import { assets } from "../assets/assets";
import Link from "next/link";
import { AboutProps } from "@/types/types";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = ({ isDarkMode }: AboutProps) => {
  if (isDarkMode === null) return null;
  const currentYear = new Date().getFullYear();

  const socialMediaLinks = [
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/mdmasudrana9",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/md-masud-rana-5b1a17214/",
    },
    { name: "Twitter", icon: <FaTwitter />, link: "https://x.com/BuCse6" },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/md.masud.rana.877664",
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          className="w-24 mx-auto md-2"
          src={isDarkMode ? assets.logonew : assets.logowhite}
          alt=""
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            className="w-6"
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
          />
          rana.cse6.bu@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t  border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-[#22D3EE] hover:text-blue-700">
          {" "}
          &copy; {currentYear} Masud Rana. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {socialMediaLinks.map((social, index) => (
            <li key={index} className="flex items-center">
              <Link
                href={social.link}
                target="_blank"
                className="flex items-center gap-2 text-[#22D3EE] hover:text-blue-700"
              >
                {social.icon}
                <span>{social.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
