import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedButton = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center px-4 ">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      // Smooth transition for spotlight movement
      spanRef.current.animate(
        { left },
        { duration: 400, easing: "ease-out", fill: "forwards" }
      );
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-black px-4 py-3 text-lg font-medium text-white border-2 border-yellow-500"
      onClick={handleButtonClick}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Explore More
      </span>

      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-white"
      />
    </motion.button>
  );
};

export default AnimatedButton;
