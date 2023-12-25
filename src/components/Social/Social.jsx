import React from "react";
import "./social.css";
import codechefPfp from "../../assets/codechef.ico";
import leetcodePfp from "../../assets/leetcode.png";
import codeForcesPfp from "../../assets/codeforces.png";
import atcoderPfp from "../../assets/atcoder.png";
import myLinks from "../../Object Files/links";
import Rounded from "../../cards/RoundedButton/index.jsx";
import { motion } from "framer-motion";

const Socials = () => {
  const leftAboutVariant = {
    hidden: {
      x: "-20%",
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
        duration: 0.3,
      },
    },
  };

  const calculateDelay = (index) => {
    return index * 0.15; // Adjust the delay factor as needed
  };

  return (
    <div className="socials">

      <div className="flex_socials">
        <div className="flex_socials">
          {myLinks.map((items , index) => {
            return (
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  show: {
                    opacity: 1,
                    transition: {
                      delay: calculateDelay(index), // Set delay based on index
                    },
                  },
                }}
              >
                <div>
                  <motion.div
                    viewport={{ once: false, amount: 0.5 }}
                    variants={leftAboutVariant}
                  >
                    <a href={items.links} target="blank">
                      <Rounded className="circle_socials ">
                        <i className={items.icons}></i>
                        <p className="p_of_social" style={{ color: "white" }}>
                          {items.text}
                        </p>
                      </Rounded>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex_socials">
        <motion.div
          className="about-main-container"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.1 }}
        >
          <div className="flex_socials">
            <motion.div
              viewport={{ once: false, amount: 0.1 }}
              variants={leftAboutVariant}
            >
              <div>
                <a href="https://leetcode.com/yadavdipesh/" target="blank">
                  <Rounded className="circle_socials">
                    <img className="image-bpx" src={leetcodePfp} alt="" />

                    <p className="p_of_social" style={{ color: "white" }}>
                      {" "}
                      Leetcode
                    </p>
                  </Rounded>
                </a>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: false, amount: 0.5 }}
              variants={leftAboutVariant}
            >
            <div>
              <a
                href="https://codeforces.com/profile/yadavdipesh"
                target="blank"
              >
                <Rounded className="circle_socials">
                  <img className="image-bpx" src={codeForcesPfp} alt="" />
                  <p className="p_of_social">CodeForces</p>
                </Rounded>
              </a>
            </div>
            </motion.div>
            <motion.div
              viewport={{ once: false, amount: 0.5 }}
              variants={leftAboutVariant}
            >
            <div>
              <a
                href="https://www.codechef.com/users/yadavdipesh331"
                target="blank"
              >
                <Rounded className="circle_socials">
                  <img className="image-bpx" src={codechefPfp} alt="" />
                  <p className="p_of_social">CodeChef</p>
                </Rounded>
              </a>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
