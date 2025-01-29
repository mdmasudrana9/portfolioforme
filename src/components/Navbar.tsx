"use client";
import Link from "next/link";
import { assets } from "./../assets/assets";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useRef, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";

interface NavbarProps {
  isDarkMode: boolean | null;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const [isScroll, setIsScroll] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Work", id: "my-work" },
    { name: "Contact", id: "contact-me" },
  ];

  const openSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className=" fixed top-0 left-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden ">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
          priority={true}
        />
      </div>
      <nav
        className={`flex fixed z-50 justify-between dark:bg-darkTheme dark:shadow-white/20 items-center py-4 px-5 lg:px-8 2xl:px-[8%] w-full ${
          isScroll ? "bg-white shadow-sm bg-opacity-50 backdrop-blur-lg" : ""
        }`}
      >
        <Link href="/">
          <Image
            src={isDarkMode ? assets.logonew : assets.logowhite}
            alt="logo"
            className="md:size-24 size-10 cursor-pointer mr-14"
          />
        </Link>

        <ul
          className={`items-center hidden md:flex  rounded-full px-12 py-3 gap-6 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent "
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`font-ovo ${
                active === item.id ? "text-[#22D3EE]" : ""
              }`}
              onClick={() => setActive(item.id)}
            >
              <Link href={`#${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? (
              <MdOutlineWbSunny size={24} />
            ) : (
              <IoMoonOutline size={24} />
            )}
          </div>
          <Link
            href="#contact-me"
            className="md:flex gap-2 items-center hidden font-ovo  justify-between border border-gray-500 rounded-full px-10 py-2.5 dark:border-white/50 dark:hover:text-black hover:bg-lightHover duration-500 hover:border-orange-300 "
          >
            Contact <GoArrowRight />
          </Link>
          <CiMenuFries
            size={24}
            className="block md:hidden"
            onClick={openSideMenu}
          />

          {/* for mobile menu */}
          <div>
            <ul
              ref={sideMenuRef}
              className="md:hidden flex flex-col py-20 px-10 fixed -right-64  bg-rose-50 transition duration-500 top-0 bottom-0 w-64 h-screen  gap-4 dark:bg-darkHover dark:text-white "
            >
              <div className="flex justify-end">
                <RxCross2 size={24} onClick={closeSideMenu} />
              </div>
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`font-ovo ${
                    active === item.id
                      ? "text-[#FC388D] dark:text-rose-500"
                      : ""
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  <Link onClick={closeSideMenu} href={`#${item.id}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
