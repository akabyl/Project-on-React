import "./style.css";
import sun from "./../../img/icons/sun.svg";
import moon from "./../../img/icons/moon.svg";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const activeLink = 'list__link list__link--active'
  const normalLink = 'list__link'


  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <NavLink to="/" className="logo">
            Freelancer <span>portfolio</span>
          </NavLink>
          <button className="dark-mode-btn">
            <img className="dark-mode-btn__icon" src={sun} alt="" />
            <img className="dark-mode-btn__icon" src={moon} alt="" />
          </button>
          <nav className="nav">
            <ul className="list">
              <li className="list__item">
                {/* <NavLink to="/project" className={({isActive}) => isActive ? activeLink : normalLink}>
                  Projects
                </NavLink> */}

              </li>
              <li className="list__item">
                <NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>
                  Skills
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;