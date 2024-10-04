import { useState, useEffect } from "react";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to switch colors
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position

      // Toggle color when scrolled past 100px (adjust as necessary)
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
      {/* Black & White Full-width Squares */}
      <div className="flex w-full h-full">
        {/* Dynamic background colors based on scroll */}
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

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-4">
        <h1 className="text-7xl font-bold text-white drop-shadow-md">
          My Creative Hero Section
        </h1>
        <p className="text-xl text-gray-200 max-w-xl">
          This is where creativity meets simplicity, balancing black and white
          with powerful visuals.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
          Explore More
        </button>
      </div>
    </section>
  );
}
