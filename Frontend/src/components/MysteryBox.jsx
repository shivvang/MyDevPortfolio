/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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
  "You've discovered something special! Here's the Download Link to the Resume.",
];

export default function MysteryBox({ setResumeFound, setTimeTaken }) {
  const [showMessage, setShowMessage] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [startTime, setStartTime] = useState(Date.now()); // Start time

  useEffect(() => {
    setStartTime(Date.now()); // Initialize the timer on load
  }, []);

  const revealMessage = () => {
    const randomIndex = Math.floor(Math.random() * secretMessages.length);
    setMessageIndex(randomIndex);
    setShowMessage(true);

    // If the resume is found, stop the timer
    if (
      secretMessages[randomIndex]
        .toLowerCase()
        .includes("download link to the resume")
    ) {
      setResumeFound(true); // Notify parent component
      setTimeTaken((Date.now() - startTime) / 1000); // Send time taken to parent
    }
  };

  const resetBox = () => {
    setShowMessage(false);
  };

  return (
    <motion.div
      onClick={revealMessage}
      onMouseLeave={resetBox}
      className="relative w-[90vw] h-[50vw] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-primary flex items-center justify-center cursor-pointer rounded-lg shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-primary blur-[4px] rounded-lg"></div>

      <div className="relative z-10 text-white text-center">
        {!showMessage ? (
          <motion.div
            className="text-base sm:text-lg md:text-xl font-futura text-tertiary tracking-wide p-4"
            initial={{ opacity: 0.6, y: 0 }}
            animate={{ opacity: 1, y: [-10, 0] }}
            transition={{
              duration: 0.6,
              ease: [0.42, 0, 0.58, 1],
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            What lies inside?
          </motion.div>
        ) : (
          <motion.div
            key={messageIndex}
            className={`text-base sm:text-lg md:text-xl font-source p-4 ${
              secretMessages[messageIndex]
                .toLowerCase()
                .includes("download link to the resume")
                ? "text-[#FFD700]" // Apply gold color for the special message
                : "text-white"
            }`}
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
