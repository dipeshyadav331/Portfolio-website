import "./projectCard.css";
 
const ProjectCard = ({
  liveSite,
  github,
  description,
  title,
  children,
  ytlink
}) => {
  return (
    <div className="project-card-container">
      <iframe src="https://player.vimeo.com/video/856648267?h=a42e1ba231&title=0&byline=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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
          STACKS USED: {children}
        </div>
        <div className="flex project-links-cont">
          <a
            href={github}
            target="blank"
            aria-label="view code base on github"
            className={`flex links__cont`}
          >
            <span className="project-links">
              <i className="fa-brands fa-github"></i>
            </span>
            <p className="btn link_text">GitHub</p>
          </a>
          <a
            href={liveSite}
            target="blank"
            aria-label="view live site"
            className="flex links__cont"
          >
            <span className="project-links">
              <i className="fa-solid fa-link"></i>
            </span>
            <p className="btn link_text">Live Link</p>
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ProjectCard;
