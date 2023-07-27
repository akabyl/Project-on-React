import HeaderContent from './../components/header/Header.js';

import Project from "./../components/project/Project";
import { projects } from './../helpers/projectsList';

const Projects = () => {
  return (
    <>
      <HeaderContent />
      <main className="main">
        <section className="section">
          <div className="container">
            <h2 className="title">Projects</h2>
            <ul className="cards">

              {projects.map((project, index) => {
                return (
                  <Project
                    key={index}
                    title={project.title}
                    img={project.img} 
                    index={index}  
                  />
                );
              })}

            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;