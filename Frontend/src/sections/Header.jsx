import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll to update opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-4 w-full z-50 transition-opacity duration-300 ${
        isScrolled ? "opacity-50" : "opacity-100"
      } hover:opacity-100`}
    >
      <SlideTabs />
    </div>
  );
}

export default Header;

function SlideTabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Project</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Cursor position={position} />
    </ul>
  );
}

function Tab({ children, setPosition }) {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase font-bold text-black transition-all duration-300 hover:text-white md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
}

function Cursor({ position }) {
  return (
    <motion.li
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      animate={position}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
