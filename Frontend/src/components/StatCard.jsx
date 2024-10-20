/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const COLORS = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c", "#222222"];

const StatCard = ({ title, endValue, duration }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  const countMotionValue = useMotionValue(0); // Motion value to track the count

  // Interpolate color based on the count value using the COLORS array, ending with black
  const color = useTransform(
    countMotionValue,
    Array.from(
      { length: COLORS.length },
      (_, i) => (endValue / COLORS.length) * i
    ), // Divide count range into equal parts based on COLORS length
    COLORS
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          animateCount(); // Start the animation when in view
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the card is in view
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [endValue, duration]);

  const animateCount = () => {
    let startValue = 0;
    setCount(0); // Reset the displayed count
    countMotionValue.set(0); // Reset the color animation
    const increment = endValue / (duration / 100);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(timer);
      }
      countMotionValue.set(startValue); // Update the motion value for color animation
      setCount(Math.floor(startValue));
    }, 100);
  };

  return (
    <motion.div
      ref={cardRef}
      className="p-4 bg-tertiary text-secondary rounded-lg font-source text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h3
        className="text-lg font-medium mb-2"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-4xl font-avenir font-bold"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{ color }} // Sets the animated color
      >
        {count}
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-primary text-white flex flex-col justify-center items-center space-y-8 p-6">
      <h2 className="text-4xl font-sans font-bold mb-8">Code Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <StatCard title="LeetCode" endValue={264} duration={2000} />
        <StatCard title="GeeksforGeeks" endValue={96} duration={2000} />
        <StatCard title="Coding Ninja" endValue={24} duration={2000} />
      </div>
    </div>
  );
};

export default StatsSection;
