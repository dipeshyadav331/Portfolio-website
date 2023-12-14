import "./hero.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";
import DipeshPhoto from "../../assets/dipesh.jpeg";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import song from "../../assets/song.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import LocomotiveScroll from "locomotive-scroll";

const Hero = ({ onClick }) => {
  const locomotiveScroll = new LocomotiveScroll();
  const [isOpen, setIsOpen] = useState(false);
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="aniHero" >
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"  
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.2 }}
        >
          <button className="btn move_to_top" onClick={toggleAudio}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} bounce />
            )}
          </button>

          <div className="leftfram" data-scroll data-scroll-speed="-0.35">
            {isPlaying && <ReactAudioPlayer src={song} autoPlay />}
            <motion.div className="hero-sub-cont-1" variants={leftVariant}>
              <p className="selfName">
                Hi, <span className="wave">👋</span>
              </p>
              <div className="selfName">My self Dipesh</div>
              <div className="flex left_align">
                <span className="alt-text-yellow">
                  <Typewriter
                    options={{
                      strings: [
                        "I am a prefinal year student at Netaji Subhash University of Technology(NSUT) Delhi",
                        "My major in B. Tech is Information Technology(IT)",
                      ],
                      autoStart: true,
                      loop: true,
                      cursor: "✍️",
                      pauseFor: 500,
                    }}
                  />
                </span>
              </div>
              <h1 className="hero-main-text ">
                A seasoned{" "}
                <span className="alt-text">Competitive Programmer</span> and a
                <span className="alt-text"> Full Stack Developer</span> ,
                Skilled in JAVA.
              </h1>

              <div className="btn-div">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <button className="btn box" onClick={onClick}>
                    Hire Me
                  </button>
                </motion.div>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    href="https://drive.google.com/file/d/1FQh-jEs34fvCSzhPMj2-GOmtB_nf7hVg/view?usp=sharing"
                    className="btn btnnn"
                    target="blank"
                  >
                    Download CV
                    <i className="fa-solid fa-download"></i>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="rightfram" data-scroll data-scroll-speed="0.9">
            {/* <motion.div
              layout
              data-isOpen={isOpen}
              initial={{ borderRadius: 50 }}
              className="parent"
              onClick={() => setIsOpen(!isOpen)}
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              // transition={{ type: "spring", stiffness: 400, damping: 20 }}
            > */}
            <img src={DipeshPhoto} alt="Dipesh_Photo" className="hero-img" />
      
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
