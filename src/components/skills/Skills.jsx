import "./skills.css";
import skill from '../../assets/start-removebg-preview.png'
import CircleCard from "../../cards/circleCards/CircleCard";
import skillData from "../../Object Files/skillData";
import { motion } from "framer-motion";

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
  return (
    <section id="skill">
      <div className="skills-container">
        <div className="flex">
          <div className="abt-image-div">
            <img
              src={skill}
              alt="bulb toolbox icon"
              className="about-image"
            />
          </div>
          <div>
            <h1 className="project-head-text alt-text"> Skills and Tools</h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>
        <div className="my-skills-container">
          {skillData.map((items) => {
            return (
              <div className="temp">
                <CircleCard {...items}/>
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
                  <motion.div
                    className="about-main-container"
                    initial={"hidden"}
                    whileInView={"show"}
                    transition={{ staggerChildren: 0.2 }}
                  >
                    <motion.div
                      viewport={{ once: false, amount: 0.5 }}
                      variants={leftAboutVariant}
                    >

                  <div className="makeitgrid">
                    <p>Eclipse</p>
                    <p>Git</p>
                    <p>Sublime Text</p>
                    <p>DBMS</p>
                    <p>VS Code</p>
                    <p>OOPS</p>
                    <p>GitHub</p>
                    <p>JSX</p>
                    <p>React</p>
                    <p>Automation</p>
                    <p>BootStrap</p>
                    <p>MongoDB</p>
                    <p>Web Scrapping</p>
                    <p>Java</p>
                    <p>Javascript</p>
                    <p>Node JS</p>
                  </div>
                    </motion.div>
                  </motion.div>
            </div>
            <div className="righttech">
                  <h2>Creative Skills</h2>
                  <hr />
                  <br /> 
                  <motion.div
                    className="about-main-container"
                    initial={"hidden"}
                    whileInView={"show"}
                    transition={{ staggerChildren: 0.2 }}
                  >
                    <motion.div
                      viewport={{ once: false, amount: 0.5 }}
                      variants={rightAboutVariant}
                    >
                      
                    <p className="customFont">I love to learn new languages and
                      have a deep passion for delving into the realm of higher mathematics and honing my skills in advanced data structures and techniques.
                      Problem-solving is not just a hobby; it's a way of life for me.
                      Whether it's unraveling the elegance of abstract mathematical concepts or crafting efficient algorithms to tackle 
                      complex real-world challenges, I thrive on the intellectual exhilaration that comes with each new problem.
                       My journey in these domains is a testament to my unwavering dedication to continuous learning and the sheer joy 
                       I find in the art of problem-solving.
                  </p>
                    </motion.div>
                  </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;