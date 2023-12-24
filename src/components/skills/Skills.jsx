import "./skills.css";
import skill from "../../assets/start-removebg-preview.png";
import CircleCard from "../../cards/circleCards/CircleCard";
import skillData from "../../Object Files/skillData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import styles from "./style.module.css";
import Rounded from "../../cards/RoundedButton/index.jsx";

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
const rightAboutVariant = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "linear",
      bounce: 0,
      duration: 1,
    },
  },
};

const Skills = () => {
  const phrase =
    "Immersing myself in the intricate world of programming languages fuels my curiosity. Each problem, with its unique complexities, drives me forward, whether it's delving into sophisticated data structures or tackling intricate challenges. Problem-solving isn't just a skill—it's my passion. Whether I'm unraveling abstract programming theories or architecting solutions for real-world scenarios, The mental stimulation I derive from each problem energizes me, driving me forward with enthusiasm and renewed vigor. I find pure joy in the puzzle of problem-solving.";
  const skills =
    "Eclipse , Git , Sublime , DBMS , VS Code , OOPS , GitHub , JSX , React , Automation , BootStrap , MongoDB , Scrapping , Java , Javascript , Node JS";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      id="skill"
      className="aniSkill"
      style={{ backgroundColor: "white" }}
    > 
      <div className="skills-container">
        <div className="flex">
          <div className="abt-image-div">
            <img src={skill} alt="bulb toolbox icon" className="about-image" />
          </div>
          <div>
            <h1 className="project-head-text alt-text">
              {" "}
              Skills and Technologies
            </h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>

        <div className="my-skills-container">
          {skillData.map((items) => {
            return (
              <div className="temp">
                <CircleCard {...items} />
              </div>
            );
          })}
        </div>

        <div className="tech">
          <div className="lefttech">
            <h2>Technologies</h2>
            <hr />
            <br />
            <br />
              <div ref={description} className={styles.description2}>
                <div className={styles.body}>
                  <p className="makeitgrid">
                    {skills.split(",").map((word, index) => {
                      return (
                        <span key={index} className={styles.mask2}>
                          <motion.span
                            variants={slideUp}
                            custom={index}
                            animate={isInView ? "open" : "closed"}
                            key={index}
                          >
                            {word}
                          </motion.span>
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            {/* </div> */}
          </div>

          <div className="righttech">
            <h2>Creative Skills</h2>
            <hr />
            <br />
            <div ref={description} className={styles.description}>
              <div className={styles.body}>
                <p>
                  {phrase.split(" ").map((word, index) => {
                    return (
                      <span key={index} className={styles.mask}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={isInView ? "open" : "closed"}
                          key={index}
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
