import { motion } from "framer-motion";
import "./circle-card.css";


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

const CircleCard = ({ skillImage, logo_text, logo , percentage}) => {
  return (
    <div className="outerskills">
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

        <div className="right_skills">
            <p className="yourSkill">{logo_text} </p>
            <p className="rightt">{percentage}</p>
        </div>
        <div className="meter">
            <div className="systum" style={{ width: percentage }}>
            </div>
        </div>

          </motion.div>
        </motion.div> 
    </div>
  );
};

export default CircleCard;