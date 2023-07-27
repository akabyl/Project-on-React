import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/` + index}>
      <li className="card">
          <img className="card__img" src={img} alt={title} />
          <h3 className="card__title">{title}</h3>
      </li>
    </NavLink>
  );
}

export default Project;