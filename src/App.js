import "./App.css";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/Error/Error";
import Main from "./pages/Main";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import "../src/components/footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from '@studio-freight/lenis'

function App() {

  const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  const [theme, setTheme] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor").toString()
      : "dark"
  );

  useEffect(() => {
    localStorage.setItem("themeColor", theme);
  }, [theme]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

        <motion.div className="progress-bar" style={{ scaleX }} />
      <ScrollToTop />
      <footer className="flex1 column footer">
        <small>
          Designed & Built by <span className="cyan">Dipesh Yadav</span>
          <span className="alt-text TNP"></span>{" "}
          <div className="giticon">
            <a
              href="https://www.linkedin.com/in/yadav-dipesh/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/dipeshyadav331"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub className="cursor-pointer" />
            </a>
          </div>
        </small>
      </footer>
    </div>
    </>
  );
}

export default App;
