import { motion } from "framer-motion";
import EmailIcon from "../assests/envelope.png";

function Contact() {
  return (
    <motion.div
      id="contact"
      whileInView={{ opacity: 1 }} // Animation triggers when in view
      initial={{ opacity: 0 }} // Initially hidden
      transition={{ duration: 1 }}
      className="bg-primary text-white py-20 px-10 h-screen flex flex-col items-center justify-center"
    >
      {/* Animate the heading */}
      <motion.h2
        whileInView={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl font-source font-bold mb-6"
      >
        Contact<span className="text-secondary">.</span>
      </motion.h2>

      {/* the paragraph text with staggered effect */}
      <motion.p
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="md:text-base lg:text-xl mb-4 font-avenir"
      >
        Why let this space go to waste? Let&apos;s turn it into something
        extraordinary! <br />
        Shoot me an email if you want to connect! You can also find me on{" "}
        <motion.a
          whileHover={{
            scale: 1.1,
            color: "#EAEAEA",
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          href="https://www.linkedin.com/in/shivang-hariakar-b62872256/"
          className="text-secondary hover:underline"
        >
          LinkedIn
        </motion.a>{" "}
        if that&apos;s more your speed.
      </motion.p>

      {/* the email link with hover interaction */}
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="text-lg  md:text-xl font-source flex items-center gap-2"
      >
        {/* Email icon placed next to the email anchor */}
        <motion.img src={EmailIcon} alt="Email Icon" className="w-6 h-6" />
        <motion.a
          transition={{ type: "spring", stiffness: 300 }}
          whileHover={{
            color: "#EAEAEA",
            textShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          href="mailto:shivangramakanthariakar@gmail.com"
          className="text-secondary hover:underline"
        >
          shivangramakanthariakar@gmail.com
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
