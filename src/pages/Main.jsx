import { useRef } from "react";
import About from "../components/about/About";
import ContactForm from "../components/contactForm/ContactForm";
import Hero from "../components/hero/Hero";
import Project from "../components/projects/Project";
import Skills from "../components/skills/Skills";
import Education from "../components/Education/education"
import { useEffect, useState } from "react";
import { AnimatePresence , motion} from "framer-motion";
import Preloader from "../components/Preloader/index.jsx";
import NavBar from "../components/navbar/NavBar.jsx"
const Main = () => {
  const contactClick = useRef("#contact");

  const handleClick = () => {
    contactClick.current.scrollIntoView({ behavior: "smooth" });
  };

  const leftAboutVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
      scale: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "linear",
        bounce: 0,
        duration: 1,
      },
    },
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

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
      
      {!isLoading && <NavBar/>}
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
