/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import MysteryBox from "./MysteryBox";

export default function FooterContent() {
  const [resumeFound, setResumeFound] = useState(false);
  const [timeTaken, setTimeTaken] = useState(null);

  // Utility function to format time
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    if (minutes > 0) {
      return `${minutes} min ${seconds} sec`;
    } else {
      return `${seconds} sec`;
    }
  };

  return (
    <div className="relative bg-white py-12 px-6 lg:px-12 h-full flex flex-col justify-evenly">
      <div className="relative z-10 text-primary">
        <Section1 setResumeFound={setResumeFound} setTimeTaken={setTimeTaken} />
        <Section2 />
        {/* Display the resume found message globally */}
        {resumeFound && (
          <div className="fixed top-4 left-4  lg:top-12 lg:left-8 bg-black text-white p-4 rounded-lg shadow-lg z-50">
            <p className="text-sm lg:text-lg flex items-center gap-2">
              🎉 You found the resume in {formatTime(timeTaken)}!
              {/* Add a download link with an icon */}
              <a
                href="https://asset.cloudinary.com/do5cnzpgw/44046766b3f26fd65faef6545ba160b6" 
                download="Resume.pdf"
                className="flex items-center underline text-[#FFD700] hover:text-white"
              >
                <span>Download Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const Section1 = ({ setResumeFound, setTimeTaken }) => {
  return (
    <div className="mt-6 lg:mt-0">
      <Nav setResumeFound={setResumeFound} setTimeTaken={setTimeTaken} />
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

const Nav = ({ setResumeFound, setTimeTaken }) => {
  return (
    <div className="flex flex-col gap-12 md:flex-row md:gap-10 lg:gap-20 justify-between items-center font-avenir text-black">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
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
      <div className="flex justify-center items-center">
        {/* Pass resumeFound and setResumeFound as props */}
        <MysteryBox
          setResumeFound={setResumeFound}
          setTimeTaken={setTimeTaken}
        />
      </div>
    </div>
  );
};

const NavLink = ({ label, href }) => {
  return (
    <motion.div
      className="flex items-center relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a
        href={href}
        className="flex items-center hover:text-secondary transition-all duration-300 text-lg font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      <div className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-secondary to-transparent"></div>
    </motion.div>
  );
};
