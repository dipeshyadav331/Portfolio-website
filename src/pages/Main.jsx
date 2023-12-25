import { useRef, useState, useEffect } from "react";
import About from "../components/about/About";
import ContactForm from "../components/contactForm/ContactForm";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";
import Education from "../components/Education/education";
import FloatNav from "../components/navbarfloat/navbarfloat";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/index.jsx";
import NavBar from "../components/navbar/NavBar.jsx";
import { motion, useScroll, useSpring } from "framer-motion";
import Social from "../components/Social/Social.jsx";

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
    restDelta: 0.001,
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

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
       setVisible(true);
    }  
    else{
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <motion.div className="progress-bar" style={{ scaleX }} />
      {!isLoading && <NavBar />}

      <Hero onClick={handleClick} />
      
      {!isLoading && visible && <FloatNav/>}
      <About />
      <Project />
      <Skills />
      <Education />
      <ContactForm contact={contactClick} />
      <Social />
    </div>
  );
};

export default Main;
