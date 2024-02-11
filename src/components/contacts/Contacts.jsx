// styles
import "./Contacts.css";
// images
import PhoneIcon from "../../assets/svg/phone-icon.svg";
function Contacts() {
  return (
    <section className="contacts">
      <div className="container contacts__container">
        <h2 className="contacts__intro">Остались вопросы?</h2>
        <h1 className="contacts__title">
          Оставьте заявку и мы ответим на все Ваши вопросы
        </h1>
        {/* FORM */}
        <form className="contacts-form" method="post">
          {/* FORM'S TITLE */}
          <label className="contacts-form__title">
            Номер телефона
            <div className="contacts-flex">
              {/* FORM'S OPTIONS */}
              <select name="countries-codes" className="contacts-selects">
                <option value="UZ">UZ</option>
                <option value="RU">RU</option>
              </select>
              {/* FORM'S INPUT */}
              <input
                type="tel"
                placeholder="99 123 45 67"
                name="phone-number"
                class="contacts-number"
              />
            </div>
          </label>
          {/* FORM'S BUTTON */}
          <button className="contacts__btn" type="submit">
            <p>Получить звонок</p>
            <img src={PhoneIcon} alt="phone icon" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
