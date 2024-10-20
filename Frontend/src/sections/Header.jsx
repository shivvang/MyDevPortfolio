import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Listen for scroll to update opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Detect when footer is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsFooterVisible(true); // Footer is visible
        } else {
          setIsFooterVisible(false); // Footer is not visible
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);
  return (
    <div
      className={`fixed top-4 w-full z-50 transition-opacity duration-300 ${
        isFooterVisible
          ? "opacity-0"
          : isScrolled
          ? "opacity-50"
          : "opacity-100"
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
      className="relative mx-auto flex w-fit rounded-full border-2 bg-tertiary border-secondary p-1"
    >
      <Tab setPosition={setPosition} scrollToId="hero">
        Home
      </Tab>
      <Tab setPosition={setPosition} scrollToId="projects">
        Project
      </Tab>
      <Tab setPosition={setPosition} scrollToId="about">
        About
      </Tab>
      <Tab setPosition={setPosition} scrollToId="contact">
        Contact
      </Tab>
      <Cursor position={position} />
    </ul>
  );
}

function Tab({ children, setPosition, scrollToId }) {
  const ref = useRef(null);

  const smoothScroll = (targetElement, duration = 1000) => {
    const startPosition = window.pageYOffset;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (time, start, change, duration) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    const animationScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    };

    requestAnimationFrame(animationScroll);
  };

  const handleClick = () => {
    const section = document.getElementById(scrollToId);
    if (section) {
      smoothScroll(section, 1500);
    }
  };

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
      onClick={handleClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase font-bold font-futura text-primary transition-all duration-300 hover:text-white md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
}

function Cursor({ position }) {
  return (
    <motion.li
      className="absolute z-0 h-7 rounded-full bg-primary md:h-12"
      animate={position}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}
