/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const StatCard = ({ title, endValue, duration }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // To ensure it only animates once
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true); // Ensure the count-up happens only once
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
  }, [endValue, duration, hasAnimated]);

  const animateCount = () => {
    let startValue = 0;
    const increment = endValue / (duration / 100);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        startValue = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(startValue));
    }, 100);
  };

  return (
    <motion.div
      ref={cardRef}
      className="p-4 bg-tertiary text-secondary rounded-lg font-source text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className="text-lg font-medium mb-2"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-4xl text-primary font-avenir font-bold"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {count}
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-primary text-white flex flex-col justify-center items-center space-y-8 p-6">
      <h2 className="text-4xl font-sans font-bold mb-8">Coding Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <StatCard title="LeetCode" endValue={262} duration={2000} />
        <StatCard title="GeeksforGeeks" endValue={95} duration={2000} />
        <StatCard title="Coding Ninja" endValue={24} duration={2000} />
      </div>
    </div>
  );
};

export default StatsSection;
