import "./projectCard.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({
  liveSite,
  github,
  description,
  title,
  children,
  ytlink,
  imgLink,
}) => {
  const [visible, setvisible] = useState(true);

  return (
    <>
      <div className="project-card-container web">
        <div className="project_image">
          <img src={imgLink} alt="project_image" />
        </div>
        <div>
          <br />
          <p className="project--title">{title}</p>
          <br />
          <div className="flex stacks_description_cont">
            <span style={{ color: "teal" }}>STACKS USED: </span>

            <span style={{ color: "black" }}>{children}</span>
          </div>

          <br />

          <p className="animated-button" onClick={() => setvisible(!visible)}>
            {" "}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {visible ? "Description" : "Close"}
          </p>

          <div className="git_inline">
            <a href={github}>
              <button class="blob-btn" href="https://www.google.com">
                Github
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </a>
            <a href={liveSite}>
              <button class="blob-btn">
                Live
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </a>
            <a href={ytlink} target="blank">
              <button class="blob-btn">
                Demo
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </a>
          </div>

          <div className={visible ? "layer" : "layer clicked"}>
            <button className="close" onClick={() => setvisible(!visible)}>
              <FontAwesomeIcon icon={faX} fade size="sm" />
            </button>
            <p className="project--title-ins">{title}</p>

            <br />
            <p className="project-desc">
              <ul>
                {description.map((item, index) => (
                  <div key={index}>
                    <li className="inside-des-project">{item.heading}</li>
                    <p className="makeTextBlack">{item.brief}</p>
                    <br />
                  </div>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="project-card-container mobile">
        <div className="project_image">
          <img src={imgLink} alt="project_image" />
        </div>
        <div>
          <p className="project--title">{title}</p>
          <br />
          <p className="project-desc">
            <ul>
              {description.map((item, index) => (
                <div key={index}>
                  <li className="inside-des-project">{item.heading}</li>
                  <p>{item.brief}</p>
                  <br />
                </div>
              ))}
            </ul>
          </p>
          <div className="flex stacks_description_cont">
            <span style={{ color: "teal" }}>STACKS USED: </span> {children}
          </div>
          <br />
          <br />
          <div className="flex project-links-cont">
            <a
              href={github}
              target="blank"
              aria-label="view code base on github"
              className={`flex links__cont`}
            >
              <p className="btn link_text">GitHub</p>
            </a>
            <a
              href={liveSite}
              target="blank"
              aria-label="view live site"
              className="flex links__cont"
            >
              <p className="btn link_text">Live Link</p>
            </a>
            <a
              href={ytlink}
              target="blank"
              aria-label="view live site"
              className="flex links__cont"
            >
              <p className="btn link_text">Demo</p>
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
