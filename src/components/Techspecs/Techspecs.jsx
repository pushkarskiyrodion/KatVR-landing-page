import Container from "../Container/Container";

const Techspecs = () => (
  <section className="techspecs page__section" id="tech">
    <Container>
      <h2 className="page__title techspecs__title">
        Tech
        <span className="page__title--secondary">
          &nbsp;Specs
        </span>
      </h2>

      <div className="techspecs__content">
        <i className="techspecs__touch techspecs__touch--sensor">+</i>
        <i className="techspecs__touch techspecs__touch--connection">+</i>
        <i className="techspecs__touch techspecs__touch--batterries">+</i>

        <div className="techspecs__description techspecs__description--sensor" id="sensor">
          <a href="./#sensor" className="techspecs__icon-close"> </a>

          <h3 className="techspecs__description-title">
            Sensor
          </h3>

          <p className="page__text">
            Weight: 35g/1.23oz each
            <br />
            Dimension: 50mm/1.97in
            <br />
            24mm/0.94in
            <br />
            Light: LED lights
          </p>
        </div>

        <div className="techspecs__description techspecs__description--connection" id="connection">
          <a href="#connection" className="techspecs__icon-close"> </a>

          <h3 className="techspecs__description-title">
            Connection
          </h3>

          <p className="page__text">
            Wireless: Bluetooth 4.2
            <br />
            Signal range: 5m
            <br />
            Receiver: USB 2.0 and above
          </p>
        </div>

        <div className="techspecs__description techspecs__description--batterries" id="batterries">
          <a href="#batterries" className="techspecs__icon-close"> </a>

          <h3 className="techspecs__description-title">
            Batterries
          </h3>

          <p className="page__text">
            Type: Lthium-lon polymer batteries
            <br />
            Capacity: 370mAh
            <br />
            Battery life: 10h of continuous use 150 hours on stand by
            <br />
            Charging: Fast charging - 1 hour
            <br />
            Charging voltage and current: 5V = 0.5A
          </p>
        </div>

        <div className="techspecs__vectors">
          <div className="techspecs__vector techspecs__vector--1"></div>
          <div className="techspecs__vector techspecs__vector--2"></div>
          <div className="techspecs__vector techspecs__vector--3"></div>
          <div className="techspecs__vector techspecs__vector--4"></div>
        </div>
      </div>
    </Container>
  </section>
);

export default Techspecs;
