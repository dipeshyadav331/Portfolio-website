import "./App.css";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis"; 

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
 
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="App" id={"dark"}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <ScrollToTop />
        <footer className="flex1 column footer">
          <small> Best viewed on desktop </small>
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
