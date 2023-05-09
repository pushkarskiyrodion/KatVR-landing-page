import Container from "../Container/Container";

const Contacts = () => (
  <section className="contacts page__section" id="contacts">
  <Container>
    <div className="contacts__wrapper">
      <div className="contacts__info">
        <p className="contacts__subtitle">
          Have any questions?
        </p>

        <h2 className="contacts__title">
          Get In
          <span className="page__title--secondary">
            &nbsp;Touch
          </span>
        </h2>

        <p className="contacts__callback page__text contacts__callback--before">
          Our manager will reply you within 15 minutes
        </p>

        <div className="contacts__contacts-us">
          <a href="tel: +86-0571-86105373" className="contacts__text">
            +86-0571-86105373
          </a>

          <a href="mailto:global@katvr.com" className="contacts__text">
            global@katvr.com
          </a>

          <a href="mailto:overseas@katvr.com" className="contacts__text">
            overseas@katvr.com
          </a>
        </div>
      </div>

      <div className="contacts__form">
        <form action="#">
          <fieldset className="contacts__form-field">
            <legend className="contacts__form-label">
              <label for="name">
                Name*
              </label>
            </legend>

            <input
              name="name"
              id="name"
              type="text"
              className="contacts__form-input"
              required
            />
          </fieldset>

          <fieldset className="contacts__form-field">
            <legend className="contacts__form-label">
              <label for="email">
                Email*
              </label>
            </legend>

            <input
              type="email"
              id="email"
              name="email"
              className="contacts__form-input"
              required
            />
          </fieldset>

          <fieldset className="contacts__form-field">
            <legend className="contacts__form-label">
              <label for="phone">
                Phone*
              </label>
            </legend>

            <input
              type="tel"
              id="phone"
              name="tel"
              className="contacts__form-input"
              required
              />
          </fieldset>

          <fieldset className="contacts__form-field">
            <legend className="contacts__form-label">
              <label for="message">
                Message*
              </label>
            </legend>

            <textarea
              name="message"
              id="message"
              cols="3"
              rows="3"
              className="contacts__form-input contacts__form-message"
              required
              spellcheck
            ></textarea>
          </fieldset>

          <button className="page__button" type="submit">
            Contact Us
          </button>

          <p className="contacts__callback page__text contacts__callback--after">
            Our manager will reply you within 15 minutes
          </p>
        </form>
      </div>
    </div>
  </Container>
</section>
);

export default Contacts;