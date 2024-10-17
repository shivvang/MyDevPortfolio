import { useState } from "react";
import { motion } from "framer-motion";

const secretMessages = [
  "The stars shine brighter when you close your eyes.",
  "Hidden paths often lead to the best adventures.",
  "What lies beneath the surface? Maybe the perfect candidate for your team.",
  "Not everything is as it seems... but my resume is as real as it gets.",
  "Shadows whisper secrets that light can't reveal... like the perfect opportunity to bring someone on board.",
  "In programming, the first bug was a real bug—a moth stuck in a computer in 1947.",
  "Fun fact: The word 'algorithm' comes from the name of a Persian mathematician, Al-Khwarizmi.",
  "Did you know? Over 70% of the world's software is written in C and C++.",
  "In the world of 0s and 1s, creativity is your greatest superpower.",
  "Just like code, every challenge has a solution... you just have to find the right developer.",
];

export default function MysteryBox() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const revealMessage = () => {
    setShowMessage(true);
    setMessageIndex(Math.floor(Math.random() * secretMessages.length));
  };

  const resetBox = () => {
    setShowMessage(false);
  };

  return (
    <motion.div
      onClick={revealMessage}
      onMouseLeave={resetBox} // Resets to initial state on mouse leave
      className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-primary flex items-center justify-center cursor-pointer rounded-lg shadow-lg"
      whileHover={{ scale: 1.1 }} // Subtle hover effect
      whileTap={{ scale: 0.95 }} // Slight shrink on click
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
    >
      {/* Outer mysterious box */}
      <div className="absolute inset-0 bg-primary blur-[4px] rounded-lg"></div>

      {/* Inner clickable content */}
      <div className="relative z-10 text-white text-center">
        {!showMessage ? (
          <motion.div
            className="text-lg sm:text-xl lg:text-2xl font-futura text-tertiary tracking-wide"
            initial={{ opacity: 0.6, y: 0 }}
            animate={{ opacity: 1, y: [-10, 0] }} // Spring effect
            transition={{
              duration: 0.6,
              ease: [0.42, 0, 0.58, 1], // Bounce effect timing function (spring-like)
              repeat: Infinity, // Keep bouncing indefinitely
              repeatType: "reverse", // Reverses the animation for smooth bounce
            }}
          >
            What lies inside?
          </motion.div>
        ) : (
          <motion.div
            key={messageIndex}
            className="text-base sm:text-lg lg:text-xl font-source text-white p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {secretMessages[messageIndex]}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
