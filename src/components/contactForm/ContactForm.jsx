import FlatCard from "../../cards/flatcard/FlatCard";
import "./contactForm.css";
import myLinks from "../../Object Files/links";
import cont from "../../assets/cont.svg";
import Form from "./Form";
import { motion } from "framer-motion";
import { useRef } from "react";
import codechefPfp from "../../assets/codechef.ico";
import leetcodePfp from "../../assets/leetcode.png";
import codeForcesPfp from '../../assets/codeforces.png';
import atcoderPfp from "../../assets/atcoder.png";

const ContactForm = ({ contact }) => {
  const nameRef = useRef();

  const handleClick = () => {
    nameRef.current.focus();
  };
  // framer motion animation variants
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
        bounce: 0.1,
        duration: 2,
      },
    },
  };

  return (
    <section id="contact" ref={contact}>
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
            <motion.div className="contact-sub-div" variants={rightVariant}>
              <p className="contact-head-textt">
                  IF YOU WANT TO <span className="highlight_text"> HIRE ME </span> OR HAVE OTHER  <span className="highlight_text"> QUERIES </span> , THEN <span className="highlight_text"> KNOCK ME ANYTIME </span>.
              
              </p> 
              </motion.div>
 <div className="flex vertical_flex project-links-cont center-it">
                {myLinks.map((items) => {
                  return (
                    <div className="sys">

                      <a
                        key={items.id}
                        href={items.links}
                        className="project-links contact-links"
                        aria-label={items.label}
                        target="blank"
                      >   
                        <i className={items.icons}></i>
                      </a> 
                      <a  
                      href={items.links} 
                      target="blank">
                        <p>{items.text}</p>
                      </a>
                  </div>
                  );
                })}
                    <div className="outer">
                        <div className="sys">
                          <a 
                            href="https://leetcode.com/yadavdipesh/"
                            className="project-links contact-links"
                            aria-label={"leetcode"}
                            target="blank"
                          >    
                            <img className="image-bpx" src={leetcodePfp} alt="" />
                          </a> 
                          <a  
                          href="https://leetcode.com/yadavdipesh/"
                          target="blank">
                            <p className="up">Leetcode</p>
                          </a>
                      </div>
                      <div className="sys">
                          <a 
                            href="https://codeforces.com/profile/yadavdipesh"
                            className="project-links contact-links"
                            aria-label={"codeeforces"}
                            target="blank"
                          >    
                            <img className="image-bpx" src={codeForcesPfp} alt="" />
                          </a> 
                          <a  
                          href="https://codeforces.com/profile/yadavdipesh"
                          target="blank">
                            <p className="up">CodeForces</p>
                          </a>
                      </div>
                      <div className="sys">
                          <a 
                            href="https://www.codechef.com/users/yadavdipesh331"
                            className="project-links contact-links"
                            aria-label={"atcoder"}
                            target="blank"
                          >    
                            <img className="image-bpx" src={codechefPfp} alt="" />
                          </a> 
                          <a  
                          href="https://www.codechef.com/users/yadavdipesh331"
                          target="blank">
                            <p className="up">CodeChef</p>
                          </a>
                      </div>
                      <div className="sys">
                          <a 
                            href="https://atcoder.jp/users/yadavdipesh"
                            className="project-links contact-links"
                            aria-label={"atcoder"}
                            target="blank"
                          >    
                            <img className="image-bpx" src={atcoderPfp} alt="" />
                          </a> 
                          <a  
                          href="https://atcoder.jp/users/yadavdipesh"
                          target="blank"
                          >
                            <p className="up">Atcoder</p>
                          </a>
                      </div>
                    </div>
              </div> 
            

            <motion.div className="contact-sub-div-2" variants={leftVariant}>
              <Form nameRef={nameRef} />
            </motion.div>
          </FlatCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;