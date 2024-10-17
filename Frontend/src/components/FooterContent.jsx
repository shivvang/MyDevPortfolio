/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import MysteryBox from "./MysteryBox";

export default function FooterContent() {
  return (
    <div className="relative bg-white py-12 px-6 lg:px-12 h-full flex flex-col justify-evenly">
      <div className="relative z-10 text-primary">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="mt-6 lg:mt-0">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mt-12 lg:mt-20 space-y-6 lg:space-y-0">
      <h1 className="text-[10vw] lg:text-[5vw] leading-[0.8] font-futura text-primary font-bold drop-shadow-md">
        Shivang Hariakar
      </h1>
      <p className="text-black text-sm italic">
        © {new Date().getFullYear()} copyright
      </p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:gap-10 lg:gap-20 justify-between items-center font-avenir text-black">
      {/* Left Section: Coding Profiles & Quick Links Together */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        {/* My Coding Profiles */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-black font-source font-bold text-lg tracking-wide">
            My Coding Profiles
          </h3>
          <NavLink label="LeetCode" href="https://leetcode.com/u/shiv_ang/" />
          <NavLink
            label="Geeks for Geeks"
            href="https://www.geeksforgeeks.org/user/shivanghioo1/"
          />
          <NavLink
            label="Code 360"
            href="https://www.naukri.com/code360/profile/41d79573-7a72-417a-8d86-f1c824bf85b5"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-primary font-source font-bold text-lg tracking-wide">
            Quick Links
          </h3>
          <NavLink label="Github" href="https://github.com/shivvang" />
          <NavLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/shivang-hariakar-b62872256/"
          />
          <NavLink
            label="Certification"
            href="https://asset.cloudinary.com/do5cnzpgw/078fd773c4dd09276aad23dd658b04d1"
          />
        </div>
      </div>

      {/* Right Section: Mystery Box */}
      <div className="flex justify-center items-center">
        <MysteryBox />
      </div>
    </div>
  );
};

const NavLink = ({ label, href }) => {
  return (
    <motion.div
      className="flex items-center relative"
      whileHover={{ scale: 1.05 }} // Scale on hover
      transition={{ type: "spring", stiffness: 300 }} // Smooth transition
    >
      <a
        href={href}
        className="flex items-center hover:text-secondary transition-all duration-300 text-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      <div className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-secondary to-transparent"></div>{" "}
    </motion.div>
  );
};
