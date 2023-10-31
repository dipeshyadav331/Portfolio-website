import "../Education/education.css";
import React from "react";
import educationimg from "../../assets/education.png";
import { motion } from "framer-motion";

function education() {
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
 
  return (
    <section id="education" style={{ backgroundColor: '#bd19c8'}}>
       
      <div className="outeredu">
        <div className="out-inn">
          <div className="flex32">
            <div className="abt-image-div">
              <img
                src={educationimg}
                alt="note book icon"
                className="about-image"
              />
            </div>
            <div className="ew1">
              <h1 className="abt-header alt-text">Education Background</h1>
              <hr className="short-hr" />
            </div>
          </div>
          <br />
          <br />
        </div>

        <div className="st-line-flex">
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
              <div className="line"></div>
            </motion.div>
          </motion.div>
          <div className="grid1">
            <div className="flex31">
              <div className="circle1">
                <p className="circle-edu">.</p>
              </div>
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
                  <div className="grid2">
                    <p className="text1">B. Tech Information Technology</p>
                    <p className="text2">Dec 2021 - May 2025 (expected)</p>
                    <br />
                    <a href="http://nsut.ac.in/" target="blank">
                      <p className="text3">
                        Netaji Subhash University of Technology , New Delhi ,
                        India
                      </p>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="flex31">
              <div className="circle1">
                <p className="circle-edu">.</p>
              </div>
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
                  <div className="grid2">
                    <p className="text1">Higher Secondary</p>
                    <a
                      href="https://drive.google.com/file/d/1C1uNjEGC_Qiv-5Gmy2hAA_rerZMOyww9/view?usp=sharing"
                      target="blank"
                    >
                      <p className="report-card">
                        (Year 12 , CBSE) -{" "}
                        <span style={{ textDecoration: "underline" }}>90</span>%
                      </p>
                    </a>
                    <p className="text2">Apr 2020 - May 2021</p>
                    <br />
                    <a href="https://pushpvihar.kvs.ac.in/" target="blank">
                      <p className="text3">
                        Kendriya Vidyalaya , Saket , New Delhi , India
                      </p>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="flex31">
              <div className="circle1">
                <p className="circle-edu">.</p>
              </div>
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
                  <div className="grid2">
                    <p className="text1">Senior Secondary </p>
                    <a
                      href="https://drive.google.com/file/d/1C1SnUfMb_iERJzrIywgplbwqokVrKGlb/view?usp=sharing"
                      target="blank"
                    >
                      <p className="report-card">
                        (Year 10 , CBSE) -
                        <span style={{ textDecoration: "underline" }}>96</span>%
                      </p>
                    </a>
                    <p className="text2">Apr 2018 - March 2019</p>
                    <br />
                    <a href="https://pushpvihar.kvs.ac.in/" target="blank">
                      <p className="text3">
                        Kendriya Vidyalaya , Saket , New Delhi , India
                      </p>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default education;
