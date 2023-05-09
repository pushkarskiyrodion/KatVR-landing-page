import Container from "../Container/Container";
import PlayButton from "../PlayButton/PlayButton";
import Swiper from "../Swiper/Swiper";

const About = ({ onPlay }) => (
  <section className="about page__section" id="about">
    <Container>
      <div className="about__wrapper">
        <div className="grid grid--switch">
          <h2 className="page__title page__title--before">
            About
            <span className="page__title--secondary">
              &nbsp;Product
            </span>
          </h2>

          <div className="grid__item--onDesktopMax1240-1-3 grid__item--onDesktopMin1240-2-6">
            <Swiper />
          </div>

          <div className="grid__item--onDesktopMax1240-4-6 grid__item--onDesktopMin1240-8-12">
            <div className="about__header-wrapper">
              <h2 className="page__title page__title--after">
                About
                <span className="page__title--secondary">
                  &nbsp;Product
                </span>
              </h2>

              <p className="about__text">
                KAT loco is a foot-based VR locomotion system that gives complete physical
                control over lower-body actions, allowing you to freely walk, run, and
                carry out just any other movement in virtual reality.
              </p>
              
              <PlayButton onPlay={onPlay} />
            </div>
          </div>
        </div>
      </div>

      <div className="about__bottom">
        <div className="about__greeting">
          <span className="page__subtitle">
            Hello,
          </span>

          <h2 className="page__title">
            Nice to meet
            <span className="page__title--secondary">
              &nbsp;you
            </span>
          </h2>

          <p className="page__text">
            KAT VR is an independent company dedicated to the research, development,
            and sales of VR Locomotion products and solutions. Founded in 2013,
            we have quickly grown to become one of the world's leading professional
            suppliers of VR games' & simulations' equipment
          </p>
        </div>

        <div className="about__us">
          <div className="about__us-text about__us--invisible">About us</div>
          <div className="about__us-text about__us--invisible">About us</div>
          <div className="about__us-text">About us</div>
          <div className="about__us-text">About us</div>
          <div className="about__us-text">About us</div>
        </div>
      </div>
    </Container>
  </section>
);

export default About;