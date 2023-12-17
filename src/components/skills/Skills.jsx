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
  const description = useRef(null);
  const isInView = useInView(description);

  const handleDownloadResume = () => {
    // Replace 'path-to-your-resume.pdf' with the actual path to your PDF resume
    const resumeURL =
      "https://drive.google.com/file/d/1eStyOViM7Hzypfzxac81jfIeeiHe7Npt/view";
    window.open(resumeURL, "_blank");
  };

  return (
    <section
      id="skill"
      className="aniSkill"
      style={{ backgroundColor: "white" }}
    >
      {/* <div className="skills-container">
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
          
               <p className="customFont">
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                   JAI SHRI SHYAM
                    JAI SHRI SHYAM 
                </p>  
          </div>
        </div>
      </div>  */}

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
            <div ref={description} className={styles.description}>
              <div className={styles.body}>
                <p className={styles.aboutPart}>
                  {phrase.split(" ").map((word, index) => {
                    return (
                      <span key={index} className={styles.mask}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={isInView ? "open" : "closed"}
                          key={index}
                          className="textPart"
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

// export default function index() {
//   const phrase =
//     "In the era in which I was born, technology was more than just a luxury; it was a staple, deeply integrated into the fabric of daily life. From a young age, I was captivated by Android applications, web development, augmented reality, and the rapidly expanding field of the Internet of Things. By the time I reached the 10th grade, this passion had evolved beyond a mere hobby into a genuine calling. Pursuing a degree in Computer Science Engineering seemed like a natural progression for me. Throughout my exploration, I've mastered various programming languages. Among them, I'm most proficient in C, C++, and Python, underscoring my dedication to both understanding and shaping the future of technology.";
//   const description = useRef(null);
//   const isInView = useInView(description);

//   const handleDownloadResume = () => {
//     // Replace 'path-to-your-resume.pdf' with the actual path to your PDF resume
//     const resumeURL = "https://drive.google.com/file/d/1eStyOViM7Hzypfzxac81jfIeeiHe7Npt/view";
//     window.open(resumeURL, "_blank");
//   };

//   return (
//     <div ref={description} className={styles.description}>
//       <div className={styles.body}>
//         <p className={styles.aboutPart}>
//           {phrase.split(" ").map((word, index) => {
//             return (
//               <span key={index} className={styles.mask}>
//                 <motion.span
//                   variants={slideUp}
//                   custom={index}
//                   animate={isInView ? "open" : "closed"}
//                   key={index}
//                   className="textPart"
//                 >
//                   {word}
//                 </motion.span>
//               </span>
//             );
//           })}
//         </p>
//         {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}></motion.p> */}
//         <div data-scroll data-scroll-speed={0.1} className={styles.btn}>
//           <Rounded className={styles.button}>
//             <p>About me</p>
//           </Rounded>
//           <Rounded onClick={handleDownloadResume} className={styles.buttonpart}>
//             <p>Resume</p>
//           </Rounded>
//         </div>
//       </div>
//     </div>
//   );
// }
