import "./hero.css"; 
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Button from "../../cards/buttons/Button";

const Hero = ({ onClick }) => {
  //framer motion animation variants
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
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p className="selfName">
              Hi, <span className="wave">👋</span>  
            </p>
            <div className="flex left_align">
              <span className="alt-text-yellow">
                <Typewriter
                  options={{
                    strings: [ 
                  "I am a prefinal year student at Netaji Subhash University of Technology(NSUT) Delhi" , 
                "My major in B. Tech is Information Technology(IT)"],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 500,
                  }}
                />
              </span>
            </div>
            <h1 className="hero-main-text ">
              A seasoned <span className="alt-text">Competitive Programmer</span> and a
              <span className="alt-text"> Web Developer</span> , Skilled in JAVA.  
            </h1>

            <div className="btn-div">
              <button className="btn" onClick={onClick}>
                Hire Me
              </button>
              <Button
                href="https://drive.google.com/file/d/1ob0oyuE3b_brMRroDXTN3k-qrm_4SXM-/view?usp=sharing"
                className="btn"
                target="blank"
              >
                Download CV
                <i className="fa-solid fa-download"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            <img src="https://pbs.twimg.com/media/F7K8kC7WkAA0lE4?format=jpg&name=small" alt="3D icon" className="hero-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;