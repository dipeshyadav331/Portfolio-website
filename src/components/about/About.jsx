import "./about.css";
import microphone from "../../assets/about.png";
import { motion } from "framer-motion";
import Button from "../../cards/buttons/Button";

const About = () => {
  const handleClick = () => {
    window.location.hash = "#name";
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
      rotate: 360,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
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
        type: "spring",
        bounce: 0.1,
        duration: 1,
      },
    },
  };
  return (
    <section id="about">
      <motion.div
        className="about-main-container"
        initial={"hidden"}
        whileInView={"show"}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="about-container">
          <motion.div
            viewport={{ once: false, amount: 0.5 }}
            variants={leftAboutVariant}
          >
          </motion.div>

          <motion.div
            className="about-sub-cont"
            viewport={{ once: false, amount: 0.5 }}
            variants={rightAboutVariant}
          >
            <div className="flex">
              <div className="abt-image-div">
                <img
                  src={microphone}
                  alt="note book icon"
                  className="about-image"
                />
              </div>

              <h1 className="abt-header alt-text">About Me</h1>
            </div>
 

            <hr className="short-hr" />
            
            <p className="about-me-text">
                  My self <span className="para-c">Dipesh Yadav</span>. I'm an <span className="para-c">optimistic person </span>
                   who loves to <span className="para-c">learn</span> and explore <span className="para-c">new technologies</span> and fields.
                    I am a focused person who loves to <span className="para-c">overcome challenges</span> and <span className="para-c">solve problems</span>.
            </p>

            <p className="about-me-text">
              I am in my prefinal year of <span className="para-c">B. Tech</span> UG from <span className="para-c">NSUT Delhi </span>(erstwhile NSIT) in 
              <span className="para-c"> Information Technology(IT)</span>
              and I will graduate in <span className="para-c">2025</span>. I am a highly motivated and technically proficient student with a <span className="para-c">passion </span>
               for <span className="para-c">problem-solving </span>
              and <span className="para-c">software development</span>, skilled in <span className="para-c">Java, C++, JavaScript</span> and a range of <span className="para-c">web technologies</span>, 
              including <span className="para-c">React, Redux</span>, and <span className="para-c">Node.js</span>,
               with a strong track record in <span className="para-c">competitive programming</span> and a commitment to <span className="para-c">leadership</span> and 
               <span className="para-c"> learning</span>.
            </p>

            <div className="about-me-textt flexx left_align">
              <p className="ach-ie"><span className="ull">Achievements</span> :-</p>
               <ul>
                  <li>
                    <h3><a href="https://codeforces.com/profile/yadavdipesh" target="blank"><span className="cyan">Specialist</span></a> at CodeForces</h3>
                  </li>
                  <li>
                    <h3><a href="https://leetcode.com/yadavdipesh" target="blank"><span className="cyan">Knight</span></a> at Leetcode</h3>
                  </li>
                  <li>
                    <h3>Solved <a href="https://clist.by/coder/yadavdipesh/" target="blank"><span className="cyan">1000+</span></a> algorithmic <a href="https://clist.by/coder/yadavdipesh/" target="blank"><span className="cyan">problems</span></a></h3>
                  </li>
                  <li>
                    <h3>Global <a href="https://codechef.com/users/yadavdipesh331" target="blank"><span className="cyan">Rank 39</span></a> in CodeChef Starters 91 out of <span className="cyan"> 18726 </span> Participants</h3>
                  </li>
                  <li>
                    <h3>Global <a href="https://codechef.com/users/yadavdipesh331" target="blank"><span className="cyan">Rank 73</span></a> in CodeChef Starters 83 out of <span className="cyan"> 25247 </span> Participants</h3>
                  </li>
                  <li>
                    <h3>Golbal <a href="https://codeforces.com/profile/yadavdipesh" target="blank"><span className="cyan">Rank 685 </span></a>in Codeforces Round 895 out of <span className="cyan"> 39240 </span> Participants </h3>
                  </li>
                  <li>
                    <h3>India <a href="https://leetcode.com/yadavdipesh" target="blank"><span className="cyan"> Rank 177</span></a> in Leetcode Weekly 348 out of <span className="cyan"> 6000+ </span> Participants</h3>
                  </li>
                  <li>
                    <h3>Qualified for <span className="cyan">RMO(Regional Mathematics Olympiad)</span> in 11th</h3>
                  </li>
               </ul>
            </div>
            <Button
              href="https://drive.google.com/file/d/1ob0oyuE3b_brMRroDXTN3k-qrm_4SXM-/view?usp=sharing"
              className="btn alt-text"
              target="blank"
            >
              Download CV
              <i className="fa-solid fa-download"></i>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
