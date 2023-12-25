import { useState , useEffect } from "react";
import "./navbarfloat.css";
import navData from "../../Object Files/nav";

import { motion , useAnimate, stagger } from "framer-motion";

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
    <div className="navbar_right" ref={scope}>
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        className="app_button"
      >
        Jump To
      </motion.button>
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
  );
};

export default Navbarfloat;
