import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";
import NumericalCategory from "../../NumericalCategory/NumericalCategory";

import "./IntroScreen.scss";
import "./TextContainer.scss";

export const IntroScreen = ({ subscribers, videos, programs }) => {
  return (
    <section className="Intro-screen">
      <div className="Intro-screen__text-content">
        <div className="Text-container">
          <h1 className="Text-container__title">
            <span>Hospitality</span>
            <span>classes, inspiration,</span>
            and tips in.
          </h1>
          <p className="Text-container__intro">
            <span> We know which problems hoteliers</span>
            <span>face every day and we are ready to</span>
            solve these problems.
          </p>
          <div className="Text-container__scroll-tip">
            <span />
            <span>Scroll down</span>
          </div>

          <section className="Numerical-categories">
            <NumericalCategory amount={subscribers} category="subscribers"/>
            <NumericalCategory amount={videos} category="videos" />
            <NumericalCategory amount={programs} category="programs" />
          </section>
        </div>
        <ButtonEllipse
          classes={"Button-ellipse_orange arrow-white"}
          routeTo={"#"}
          text="Find the program"
        />
      </div>

      <div className="Intro-screen__video-section">
        <img
          // tslint:disable-next-line:max-line-length
          src="https://res.cloudinary.com/dops-digital/image/upload/v1551182383/Hospitality%20Hub/placeholder_first_screen.png"
          alt="video sprite"
        />
      </div>
    </section>
  );
};
