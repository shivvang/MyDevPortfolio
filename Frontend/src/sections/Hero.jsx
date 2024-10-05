import { useState, useEffect } from "react";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedText from "../components/AnimatedText";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to switch colors
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position

      // Toggle color when scrolled past 100px

      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="flex w-full h-full">
        <div
          className={`w-1/2 h-full transition-colors duration-500 ${
            isScrolled ? "bg-white" : "bg-black"
          }`}
        />
        <div
          className={`w-1/2 h-full transition-colors duration-500 ${
            isScrolled ? "bg-black" : "bg-white"
          }`}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-8 pt-20">
        <AnimatedText />
        <p className="text-xl text-[#C9C9C9] max-w-xl ">
          I&apos;m a FullStack Developer with a deep passion for backend
          architecture and system design. I enjoy building seamless user
          experiences, while also ensuring efficient and scalable backend
          systems.
        </p>
        <AnimatedButton />
      </div>
    </section>
  );
}
