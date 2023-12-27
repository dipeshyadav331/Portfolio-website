import { useState, useEffect } from "react";
import "./navbarfloat.scss";
import navData from "../../Object Files/nav";

import { motion, useAnimate, stagger } from "framer-motion";

const Navbarfloat = () => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 300 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  return (
    <>
      <div className="navbar_right" ref={scope}>
      <div id="hamburger" onClick={() => setOpen(!open)} className={`hamburglar ${open ? 'is-open' : 'is-closed'}`}>
        <div className="burger-icon">
          <div className="burger-container">
            <span className="burger-bun-top"></span>
            <span className="burger-filling"></span>
            <span className="burger-bun-bot"></span>
          </div>
        </div>

        <div className="burger-ring">
          <svg className="svg-ring">
            <path
              className="path"
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
            />
          </svg>
        </div>
        <svg width="0" height="0">
          <mask id="mask">
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ff0000"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"
            />
          </mask>
        </svg>
        <div className="path-burger">
          <div className="animate-path">
            <div className="path-rotation"></div>
          </div>
        </div>
      </div>
        
        <ul className="app_ul">
          {navData.map((item, index) => (
            <motion.li
              key={index}
              className="app_li"
              onClick={() => setOpen(false)}
            >
              <a href={`${item.link}`}>{item.description}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbarfloat;
