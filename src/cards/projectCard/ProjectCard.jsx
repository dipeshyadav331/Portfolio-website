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
}) => {
  const [visible, setvisible] = useState(false);

  return (
    <div className="project-card-container">
      <iframe
        width="560"
        height="315"
        src={ytlink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <div>
        <br />
        <p className="project--title">{title}</p>
        <br />
        <div className="flex stacks_description_cont">
          <span style={{ color: "teal" }}>STACKS USED: </span> {children}
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
            Live Link
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
  );
};

export default ProjectCard;
