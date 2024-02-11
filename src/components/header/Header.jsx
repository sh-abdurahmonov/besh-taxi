// styles
import "./Header.css";
// images
import SiteLogo from "../../assets/svg/site-logo.svg";
function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        {/* SITE LOGO */}
        <a className="site-logo" href="/">
          <img src={SiteLogo} alt="Besh Taxi logo" />
        </a>
      </div>
      <div className="click-item">
        <button className="header__btn">Поехали!</button>
      </div>
    </header>
  );
}

export default Header;
