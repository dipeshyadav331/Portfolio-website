import ProjectCard from "../../cards/projectCard/ProjectCard";
import "./project.scss";
import { projectData } from "../../Object Files/projectObject";

const Project = () => {
  return (
    <section id="project" className="aniProject" style={{ backgroundColor: 'white' }}>
      <div className="project-cont">
        
        <div className="horizontal-scroll-wrapper squares">
                {projectData.map((items) => {
                  return (
                    <ProjectCard key={items.id} {...items}>
                      {items.stacks.map((item) => {
                        return (
                          <span key={item} className="btn stacks_description">
                            {item}
                          </span>
                        );
                      })}
                    </ProjectCard>
                  );
                })}
            </div>
          </div> 
    </section>
  );
};

export default Project;
