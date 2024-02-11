// styles
import "./Footer.css";
// images
import InstagramIcon from "../../assets/svg/instagram-icon.svg";
import TelegramIcon from "../../assets/svg/telegram-icon.svg";
import SiteIcon from "../../assets/svg/footer_site-logo.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__links">
          {/* SITE LOGO */}
          <a href="/" className="footer__logo">
            <img src={SiteIcon} alt="Besh Taxi logo" />
          </a>
          {/* FOOTER'S LIST */}
          <ul className="footer-list">
            <li className="footer-list__item">
              <a
                href="http://instagram.com"
                target="blank"
                className="footer-list__link btn"
              >
                <p className="footer-list__text">Наш Instagram</p>
                <img src={InstagramIcon} alt="instagram icon" />
              </a>
            </li>
            <li className="footer-list__item">
              <a
                href="http://t.me"
                target="blank"
                class="footer-list__link btn"
              >
                <p className="footer-list__text">Наш Telegram</p>
                <img src={TelegramIcon} alt="telegram icon" />
              </a>
            </li>
          </ul>
        </div>
        {/* FOOTER'S TEXT */}
        <div className="footer__context">
          <p className="copyright footer__text">
            © 2024 Besh. All rights reserved.
          </p>
          <p className="privacy-policy footer__text">
            Политика конфединциальности
          </p>
          <p className="terms-of-use footer__text">Правила пользования</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
