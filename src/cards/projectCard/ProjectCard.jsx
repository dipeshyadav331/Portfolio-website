import "./projectCard.css";
import { useState } from "react";
import ProjectDescription from "../projectDescription/projectDescription.jsx";

const ProjectCard = ({
  liveSite,
  github,
  description,
  title,
  children,
  ytlink,
}) => {
  const [visible, setvisible] = useState(false);

  const close = () => {
    setvisible(!visible);
  };
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
        {/* <p className="project-desc">
          <ul>
            {description.map((item, index) => (
              <div key={index}>
                <li className="inside-des-project">{item.heading}</li>
                <p className="makeTextBlack">{item.brief}</p>
                <br />
              </div>
            ))}
          </ul>
        </p> */}
        {/* <br /> */}
        <div className="flex stacks_description_cont">
          <span style={{ color: "teal" }}>STACKS USED: </span> {children}
        </div>

        <div className="flex project-links-cont" style={{ marginLeft: "15px" }}>
          <a
            href={github}
            target="blank"
            className={`flex links__cont`}
          >
            {/* <span className="project-links">
              <i className="fa-brands fa-github"></i>
            </span> */}
            <p className="btn link_text">GitHub</p>
          </a>
          <a
            href={liveSite}
            target="blank"
            className="flex links__cont"
          >
            {/* <span className="project-links">
              <i className="fa-solid fa-link"></i>
            </span> */}
            <p className="btn link_text">Live Link</p>
          </a>
        </div>
        <br />
        <br />

        {/* <div className="toplayer"> */}
        <button onClick={() => setvisible(!visible)}> {visible ? 'Description' : 'Close'}</button>
        {/* </div> */}
        <div className={visible ? "layer" : "layer clicked"}>
          <button className="close" onClick={() => setvisible(!visible)}>
            Close
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

      {/* {visible && (
        <ProjectDescription className="chkposabs" handleClick={close} />
      )} */}
    </div>
  );
};

export default ProjectCard;
