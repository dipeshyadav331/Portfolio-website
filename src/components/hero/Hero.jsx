import "./hero.css";
import { motion } from "framer-motion"; 
import Rounded from "../../cards/RoundedButton/index.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import song from "../../assets/song.mp3";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Hero = ({ onClick }) => {
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

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="home" className="aniHero">
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
          <div className="leftfram">
            {isPlaying && <ReactAudioPlayer src={song} autoPlay />}
            <motion.div className="hero-sub-cont-1" variants={leftVariant}>
              <p className="selfName">
                Hi, I am Dipesh Kumar.
              </p>
            
              <h1 className="hero-main-text ">
                A seasoned
                <span className="alt-text alt-text2"> Competitive Programmer</span> and a
                <span className="alt-text alt-text2"> Full Stack Developer</span>,
                Skilled in <span className="alt-text">JAVA</span>.
              </h1>

              <div className="college_desc">
                I am a prefinal year B.Tech student at Netaji Subhash University of Technology(NSUT) Delhi. My major in B. Tech is Information Technology(IT).
              </div>
              
              <div className="btn-div">
                <motion.div
                  className="box hidediv"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Rounded onClick={onClick}>
                    <p>Connect</p>
                  </Rounded>
                </motion.div>
                <motion.div
                   className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                > 
                  <a
                    href="https://drive.google.com/file/d/1yzSwX-IBQwyMIyBppsXiyrEM6r13oHyQ/view?usp=drive_link"
                    target="blank"
                  >
                    <Rounded>
                      <p>Resume</p>
                    </Rounded>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="rightfram">
            <img src='https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif' alt="Dipesh_Photo" className="hero-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
