import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import { transform } from "framer-motion";

const App = () => {
  useEffect(() => {
    const showSecretMessage = () => {
      // toast.info(
      //   "🕵️‍♂️ Psst... If you're looking for my resume, maybe it's hidden in the footer... but where exactly is the footer?",
      //   {
      //     position: "top-center",
      //     autoClose: 8000, // Auto close the toast after 8 seconds
      //     hideProgressBar: true,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     theme: "dark",
      //   }
      // );
    };

    // Show the message a few seconds after the page loads
    setTimeout(showSecretMessage, 1000);
  }, []);

  //custom curson
  const trailer = document.getElementById("trailer");

  // Mouse move event to follow cursor
  window.onmousemove = (e) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    // Animate trailer position
    trailer.animate([{ transform: `translate(${x}px, ${y}px)` }], {
      duration: 500, // Change duration as needed
      fill: "forwards",
    });
  };

  // Scaling behavior for different elements
  const elementsToScale = {
    paragraph: { selector: "p", scale: 1.5 },
    heading: { selector: "h1, h2, h3, h4, h5, h6", scale: 2 },
    link: { selector: "a", scale: 1.8 },
    button: { selector: "button", scale: 1.6 },
    image: { selector: "img", scale: 1.4 },
  };

  // Apply scaling on hover
  Object.values(elementsToScale).forEach(({ selector, scale }) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("mouseenter", () => {
        trailer.style.transform += ` scale(${scale})`; // Scale up
      });
      element.addEventListener("mouseleave", () => {
        // Reset scale on mouse leave
        trailer.style.transform = trailer.style.transform.replace(
          / scale\(\d+(\.\d+)?\)/,
          ""
        );
      });
    });
  });

  return (
    <div className="min-h-screen flex flex-col gap-2">
      <div
        id="trailer"
        className="h-10 w-10 bg-white rounded-full fixed left-0 top-0 z-50 transition-transform duration-300 ease-linear mix-blend-difference"
      ></div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default App;
