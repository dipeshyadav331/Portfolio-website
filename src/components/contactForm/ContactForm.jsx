import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";
import cont from "../../assets/cont.svg";
import Form from "./Form";
import { motion } from "framer-motion";
import { useRef } from "react";


const ContactForm = ({ contact }) => {
  const nameRef = useRef();

  
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
        bounce: 0.1,
        duration: 2,
      },
    },
  };

  return (
    <section id="contact" ref={contact} style={{ backgroundColor: "white" }}>
      <div className="max-width flex column contact__cont_main">
        <div className="flex">
          <div className="abt-image-div contact_img_div">
            <img src={cont} alt="3d contact icon" className="about-image" />
          </div>

          <div>
            <h1 className="project-head-text alt-text"> Contact Me</h1>
            <hr className="short-hr project-hr right_hr" />
          </div>
        </div>
        <br />
        <br />
        <motion.div
          className="max_content"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <FlatCard
            customClass="contact-form-cont"
            style={{ overflow: "hidden" }}
          >
            <motion.div className="contact-sub-div">
              <p className="contact-head-textt" style={{color:'black'}}>
                IF YOU WANT TO <span className="highlight_text"> HIRE ME </span>{" "}
                OR HAVE OTHER <span className="highlight_text"> QUERIES </span>{" "}
                , THEN{" "}
                <span className="highlight_text"> KNOCK ME ANYTIME </span>.
              </p>
            </motion.div>
            

            <motion.div className="contact-sub-div-2" variants={rightVariant} style={{color:'black'}}>
              <Form nameRef={nameRef} />
            </motion.div>
          </FlatCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
