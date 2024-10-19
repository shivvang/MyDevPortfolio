/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const secretMessages = [
  // Teasing messages about finding the resume
  "The more you tap, the closer you get... to the hidden treasure (hint: it's my resume).",
  "One more tap, and you might just unlock something important... like a resume!",

  // MERN stack facts
  "Did you know? MERN powers some of the biggest web apps today. I’ve mastered it, ready to build yours?",
  "React components are like LEGO blocks for developers. I'm the one who can build anything from them.",
  "Node.js makes scaling apps easy. Let me scale your next big project.",

  // Indirect "hire me" messages
  "The shortest path between you and the perfect developer? You're tapping on it.",
  "Like finding the right algorithm, finding the right developer makes all the difference. Is it me?",
  "You don't need to solve this hiring problem—I'm right here, ready to be your solution.",

  // Final "resume found" message
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
