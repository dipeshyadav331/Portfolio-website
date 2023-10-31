import { useRef } from "react";
import About from "../components/about/About";
import ContactForm from "../components/contactForm/ContactForm";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";
import Education from "../components/Education/education";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/index.jsx";
import NavBar from "../components/navbar/NavBar.jsx";
import { motion, useScroll, useSpring } from "framer-motion";

const Main = () => {
  const contactClick = useRef("#contact");

  const handleClick = () => {
    contactClick.current.scrollIntoView({ behavior: "smooth" });
  };

  const [isLoading, setIsLoading] = useState(true);


  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <motion.div className="progress-bar" style={{ scaleX }} />
      {!isLoading && <NavBar />}
      <Hero onClick={handleClick} />
      <About />
      <Project />
      <Skills /> 
      <Education />
      <ContactForm contact={contactClick} />
    </div>
  );
};

export default Main;
