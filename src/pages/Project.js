import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList.js";


const Project = () => {
  const {id} = useParams();
  const project = projects[id]
  return (
    <main className="main">
      <section className="section">
        <div className="container">
          <div className="projects-details">
            <h1 className="title">{project.title}</h1>
            <img className="projects-details__cover" src={project.imgBig} alt=""/>
              <div className="projects-details__descr">
                <p>Skills: {project.skills}</p>
              </div>
              {project.gitHubLink && (
                <BtnGitHub link="http://github.com"/>
              )}


          </div>


        </div>
      </section>
    </main>
  );
}

export default Project;