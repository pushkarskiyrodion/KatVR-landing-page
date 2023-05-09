import Container from "../Container/Container";

const More = () => (
  <section className="more page__section" id="more">
    <Container>
      <div className="more__header">
        <h2 className="page__title">
          More Than
          <span className="page__title--secondary">
            &nbsp;Gaming!
          </span>
        </h2>

        <p className="page__subtitle">
          This also made for people who are interested in...
        </p>
      </div>

      <div className="more__content">
        <div className="more__card">
          <img
            src="./images/education.svg"
            alt="education"
            className="page__card-image"
          />

          <h2 className="page__card-title">
            Education
          </h2>

          <p className="page__card-text">
            Create aducational simulations, trainings and much more
            with unlimited virtual space and minimum physical space
          </p>
        </div>

        <div className="more__card">
          <img
            src="./images/skyline.svg"
            alt="skyline"
            className="page__card-image"
          />

          <h2 className="page__card-title">
            Real Estate
          </h2>

          <p className="page__card-text">
            Desighn architectural projects in a deeply realistic
            environment allowing visitors to freely walk around,
            and feel their vibe
          </p>
        </div>

        <div className="more__card">
          <img
            src="./images/fitness.svg"
            alt="fitness"
            className="page__card-image"
          />

          <h2 className="page__card-title">Fitness</h2>

          <p className="page__card-text">
            Combine business with pleasure, and discover
            countless ways to stay fit while playing your
            favorite VR Games!
          </p>
        </div>

        <div className="more__card">
          <img
            src="./images/network.svg"
            alt="network"
            className="page__card-image"
          />

          <h2 className="page__card-title">
            Social Interactions
          </h2>

          <p className="page__card-text">
            Hang out with your friends in the virtual
            world when you can't meet space requirements
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default More;