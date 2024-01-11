import "./skillsG.css";
import { motion } from "framer-motion";
import skill from "../../assets/start-removebg-preview.png";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="skills_circle"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const skillsG = () => {
  return (
    <section id="skill grid">
      <div className="skillsG-outer">
        <div className="skillsG">
          {/* SKILLS */}

          <Skill name="HTML" x="-10vw" y="-8vw" />
          <Skill name="CSS" x="8vw" y="0vw" />
          <Skill name="Javascript" x="15vw" y="8vw" />
          <Skill name="ReactJS" x="-15vw" y="9vw" />
          <Skill name="Java" x="-38vw" y="-1vw" />
          <Skill name="C++" x="32vw" y="-8vw" />
          {/* <Skill name="Competitive Programming" x="-29vw" y="18vw" /> */}
          <Skill name="NodeJs" x="3vw" y="18vw" />
          <Skill name="MongoDB" x="11vw" y="-13vw" />
          <Skill name="MySql" x="-23vw" y="-11vw" />
          <Skill name="DsA" x="-4vw" y="-21vw" />
          <Skill name="Git/Github" x="32vw" y="18vw" />

        </div>
      </div>
    </section>
  );
};

export default skillsG;
