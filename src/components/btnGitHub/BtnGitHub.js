import './style.css';
import gitHub from "./git-black.svg";


const BtnGitHub = ({link}) => {
  return (
    <a className="btn-outline" href={link} target="_blank" rel="noreferrer">
      <img src={gitHub} alt="gitHub" />
      GitHub repo
    </a>
  );
}

export default BtnGitHub;