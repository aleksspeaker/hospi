import React, {Component} from 'react';
import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";
import TimerSlider from "./TimerSlider";

import './TextContainer.scss';
import './TopCoursesScreen.scss';

export class TopCoursesScreen extends Component {
  public render() {
    return (
      <section className="Top-courses-screen">
        <div className="Top-courses-screen__text-content">
          <div className="Text-container">
            <h2 className="Text-container__title">
              <span>Online</span>
              Courses.
            </h2>
            <p className="Text-container__intro">
              for the Hospitality Industries.
            </p>
            <ButtonEllipse
              text={"all programs"}
              classes={"Button-ellipse_gray arrow-dark"}
            />
          </div>
        </div>
        <TimerSlider />
      </section>
    );
  }
}
