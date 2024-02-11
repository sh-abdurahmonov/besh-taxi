// styles
import "./Home.css";
// images
import AppStoreIcon from "../../assets/svg/app-store-icon.svg";
import PlayMarketIcon from "../../assets/svg/play-market-icon.svg";
import PhoneImg from "../../assets/svg/mobile-img.svg";
import PhoneImg2 from "../../assets/svg/mobile-img2.svg";
import CarIcon1 from "../../assets/svg/car-icon1.svg";
import CarIcon2 from "../../assets/svg/car-icon3.svg";
import CarIcon3 from "../../assets/svg/car-icon3.svg";
function Home() {
  return (
    <main className="main">
      {/* INTRODUCTION SECTION */}
      <section className="intro-section">
        <div className="container intro-section__container">
          <div className="intro-section__content">
            <h1 className="intro-section__title">Добро пожаловать в Besh</h1>
            <p className="intro-section__text">
              Мы предлагаем беспрепятственное, безопасное и комфортное
              передвижение по потрясающим пейзажам Узбекистана. Наше
              минималистичное приложение — ваш билет на поездку! Никаких
              проблем, просто приятное путешествие.
            </p>
          </div>
          {/* INFORMATION LIST */}
          <div className="intro-section__info">
            <ul className="intro-section__list">
              <li className="intro-section__item">
                <h3 className="intro-section__number">120</h3>
                <span className="intro-section__context">Городов</span>
              </li>
              <li className="intro-section__item">
                <h3 className="intro-section__number">1267</h3>
                <span className="intro-section__context">
                  Довольных пользователей
                </span>
              </li>
              <li className="intro-section__item">
                <h3 className="intro-section__number">24/7</h3>
                <span className="intro-section__context">
                  Круглосуточное обслуживание
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* BANNER SECTION */}
      <section className="banner-section">
        <div className="container banner-section__container">
          <h1 className="banner-section__title">
            Доставим Вас в любую точку страны с комфортом и безопастностью.
          </h1>
        </div>
      </section>
      {/* INFORMATION SECTION */}
      <section className="info-section">
        <div className="container info-section__container">
          <div className="info-section__intro">
            <h1 className="info-section__title">
              Пришло время окунуться в <span>комфорт</span> и в{" "}
              <span>безопастность </span>
              вместе с <span>Besh</span>. Присоединяйтесь к поездке.
            </h1>
            {/* BUTTONS FOR INSTALLATION */}
            <div className="info-section__btns">
              <a
                href="https://www.apple.com/app-store/"
                target="blank"
                className="btn info-section__btn"
              >
                <p>AppStore</p>
                <img src={AppStoreIcon} alt="app store icon" />
              </a>
              <a
                href="https://play.google.com"
                target="blank"
                className="btn info-section__btn"
              >
                <p>PlayMarket</p>
                <img src={PlayMarketIcon} alt="play market icon" />
              </a>
            </div>
          </div>
          {/* INFORMATION'S CONTENT 1  */}
          <div className="info-section__content">
            <img
              className="info-section__img"
              src={PhoneImg}
              alt="mobile phone image"
            />
            <div>
              <h2 className="info-section__subtitle intro">
                Каждый водитель это мастер своего дела
              </h2>
              <p className="info-section__text">
                Мы не просто еще одно приложение для такси, мы неустанно
                работаем над тем, чтобы обеспечить исключительные впечатления от
                путешествий, уделяя при этом особое внимание вашей безопасности.
              </p>
              <a
                href="https://www.apple.com/app-store/"
                target="blank"
                className="info-section__btn hidden-btn"
              >
                <p>AppStore</p>
                <img src={AppStoreIcon} alt="app store icon" />
              </a>
            </div>
          </div>
          {/* INFORMATION'S CONTENT 2  */}
          <div className="info-section__content">
            <div>
              <h2 className="info-section__subtitle intro">
                Как сделать поездку комфортной и удобной
              </h2>
              <p className="info-section__text">
                Наш интуитивно понятный дизайн приложения позволяет
                забронировать поездку всего в несколько нажатий. С Besh каждая
                поездка становится плавной.
              </p>
              <a
                href="https://play.google.com"
                target="blank"
                className="info-section__btn hidden-btn"
              >
                <p>PlayMarket</p>
                <img src={PlayMarketIcon} alt="app store icon" />
              </a>
            </div>
            <img
              className="info-section__img"
              src={PhoneImg2}
              alt="mobile phone image"
            />
          </div>
        </div>
      </section>
      {/* GUIDE SECTION */}
      <section className="guide-section">
        <div className="container guide-section__container">
          <h2 className="guide-section__intro ">Хотите стать водителем?</h2>
          <h1 className="guide-section__title">
            Всего 3 шага и вы будете в числе водителей
          </h1>
          {/* GUIDE'S LIST */}
          <ul className="guide-section__list">
            <li className="guide-section__item">
              <img
                src={CarIcon1}
                alt="car icon"
                className="guide-section__img"
              />
              <p className="guide-section__text">Скачайте приложение</p>
            </li>
            <li className="guide-section__item">
              <img
                src={CarIcon2}
                alt="car icon"
                className="guide-section__img"
              />
              <p className="guide-section__text">
                Зарегестрируйтесь и пройдите обязательную верификацию
              </p>
            </li>
            <li className="guide-section__item">
              <img
                src={CarIcon3}
                alt="car icon"
                className="guide-section__img"
              />
              <p className="guide-section__text">Начинайте зарабатывать</p>
            </li>
          </ul>
          {/* GUIDE'S BUTTONS */}
          <div className="guide-section__btns">
            <a
              href="https://www.apple.com/app-store/"
              target="blank"
              className="btn guide-section__btn"
            >
              <p>AppStore</p>
              <img src={AppStoreIcon} alt="app store icon" />
            </a>
            <a
              href="https://play.google.com"
              target="blank"
              className="btn guide-section__btn"
            >
              <p>PlayMarket</p>
              <img src={PlayMarketIcon} alt="play market icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
