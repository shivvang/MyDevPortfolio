import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutHeader = () => {
  const [inView, setInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
        } else {
          setInView(false); // Reset when out of view
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={headerRef}
        className="flex gap-4 items-center justify-start overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Reset animation when out of view
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h1
          className="font-source text-primary text-4xl md:text-5xl lg:text-6xl whitespace-nowrap"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Same here
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About<span className="text-secondary">.</span>
        </motion.h1>
        <motion.hr
          className="bg-secondary w-full h-[3px] rounded-lg border-none"
          initial={{ opacity: 0, width: 0 }}
          animate={
            inView ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }
          } // Reset hr animation
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default AboutHeader;
