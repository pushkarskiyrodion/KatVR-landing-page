import Container from "../Container/Container";

const Benefits = () => (
  <section className="benefits page__section" id="benefits">
  <Container>
    <h2 className="page__title benefits__title">
      Why
      <span className="page__title--secondary">
        &nbsp;Kat Loco
      </span>
    </h2>

    <div className="benefits__cards">
      <div className="page__card">
        <img
          src="./images/compatible.svg"
          alt="universally-compatible"
          className="page__card-image"
        />

        <h3 className="page__card-title">
          universally compatible
        </h3>

        <p className="page__card-text">
          KAT Loco offers universal compatibility across all major
          VR headsets and platforms allowing you to play any
          VR game with support for Free Locomotion
        </p>
      </div>

      <div className="page__card">
        <img
          src="./images/pc-control-panel.svg"
          alt="pc-control-panel"
          className="page__card-image"
        />

        <h3 className="page__card-title">
          VR/PC Control panel
        </h3>

        <p className="page__card-text">
          Our Multifunctional Software allows for quick access to KAT
          Loco's control panel both from a computer desktop, and
          directly from your VR headset.
        </p>
      </div>

      <div className="page__card">
        <img
          src="./images/wireless-sensors.svg"
          alt="wireless-sensors"
          className="page__card-image"
        />

        <h3 className="page__card-title">
          Wireless Sensors
        </h3>

        <p className="page__card-text">
          What makes it even more advanced, KAT Loco is entirely wireless,
          and comes with a complete system of algorithms,
          super durable batteries and more!
        </p>
      </div>
    </div>

    <button className="page__button benefits__button">
      Buy Now
    </button>
  </Container>
</section>
);

export default Benefits;