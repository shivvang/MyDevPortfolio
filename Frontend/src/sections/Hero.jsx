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
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="flex w-full h-full">
        <div
          className={`w-1/2 h-full transition-colors duration-500 ${
            isScrolled ? "bg-white" : "bg-primary"
          }`}
        />
        <div
          className={`w-1/2 h-full transition-colors duration-500 ${
            isScrolled ? "bg-primary" : "bg-white"
          }`}
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-8 pt-20 px-4 lg:px-0 md:pt-28 sm:pt-16">
        <AnimatedText />
        <p className="hero-text text-xl md:text-2xl lg:text-3xl xl:text-4xl  md:whitespace-nowrap max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          <span className="text-secondary">&lt; </span>
          From Mechanical to Digital, I Explore It All
          <span className="text-secondary"> / &gt;</span>
        </p>
        <AnimatedButton />
      </div>
    </section>
  );
}
