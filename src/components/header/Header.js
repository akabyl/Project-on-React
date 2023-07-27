import "./style.css";

const HeaderContent = () => {
  return (
    <div className="header-content">
      <div className="header-content__wrapper">
        <h1 className="header-content__title">Hi, my name is <span>Abdu</span><br /> I'm a frontend developer</h1>
        <p className="header-content__text">with passion for learning and creating.</p>
        <a className="header-content__link" href="#!">Download CV</a>
      </div>
    </div>
  );
}

export default HeaderContent;