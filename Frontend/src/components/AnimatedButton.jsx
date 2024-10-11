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
    const startPosition = window.scrollY;
    const targetPosition = startPosition + 600;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;

      // Calculate the progress of the animation (0 to 1)
      const progress = Math.min(elapsedTime / duration, 1);
      // Ease out effect
      const easeOut = 1 - Math.pow(1 - progress, 3); // Cubic easing

      // Scroll by a fraction of the distance based on the easing
      window.scrollTo(0, startPosition + distance * easeOut);

      // Continue the animation if it hasn't reached the end
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-primary px-4 py-3  text-lg font-medium text-white border-2 border-secondary"
      onClick={handleButtonClick}
    >
      <span className="font-futura pointer-events-none relative z-10 mix-blend-difference">
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
