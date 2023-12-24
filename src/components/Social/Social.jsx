import React from "react";
import "./social.css";
import codechefPfp from "../../assets/codechef.ico";
import leetcodePfp from "../../assets/leetcode.png";
import codeForcesPfp from "../../assets/codeforces.png";
import atcoderPfp from "../../assets/atcoder.png";
import myLinks from "../../Object Files/links";

const Socials = () => {
    return(
        <div className="socials">
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
                    
                    <a href={items.links} target="blank">
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
                  <a href="https://leetcode.com/yadavdipesh/" target="blank">
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
                    target="blank"
                  >
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
                    target="blank"
                  >
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
                  <a href="https://atcoder.jp/users/yadavdipesh" target="blank">
                    <p className="up">Atcoder</p>
                  </a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Socials;