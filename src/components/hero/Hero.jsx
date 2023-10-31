import "./hero.css";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";
import DipeshPhoto from "../../assets/dipesh.jpeg";
import { useState } from "react";
const Hero = ({ onClick }) => {
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

  return (
    <section id="home" style={{backgroundColor:'rgb(197,23,69'}}>
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.2 }}
        >
        <div className="leftfram">

        
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
              <span className="alt-text"> Full Stack Developer</span> , Skilled
              in JAVA.
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
                  href="https://drive.google.com/file/d/15BFKSEzE2oRTZteujKN9BSFoV-kSeGIe/view?usp=sharing"
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


            <div className="rightfram">
                <motion.div
                  layout
                  data-isOpen={isOpen}
                  initial={{ borderRadius: 50 }}
                  className="parent"
                  onClick={() => setIsOpen(!isOpen)}
                  // whileHover={{ scale: 1.1 }}
                  // whileTap={{ scale: 0.9 }}
                  // transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <img src={DipeshPhoto} alt="Dipesh_Photo" className="hero-img" />
                </motion.div>
            </div>
            </motion.div>
    
      </div>
    </section>
  );
};

export default Hero;
