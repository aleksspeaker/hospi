import React, {Component} from 'react';
import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";
import { WebTemplateSlider } from "../../WebTemplateSlider/WebTemplateSlider";

import './WebTemplatesScreen.scss';

interface IWebTemplatesScreen {
  templatesAmount: number;
}

export class WebTemplatesScreen extends Component<IWebTemplatesScreen> {
  public render() {
    const {templatesAmount} = this.props;

    return (
      <section className="Web-template-screen">
        <div className="Web-template-screen__intro-text">

          <div className="Text-container">
            <h3>
              <span>Web Templates,</span>
              <span>Tools, Digital Books,</span>
              <span>Whitepapers.</span>
            </h3>

            <div className="Text-container__to-shopping">
              <ButtonEllipse
                classes={"Button-ellipse_orange arrow-white"}
                routeTo={"/"}
                text={"shopping"} />

              <small>{templatesAmount + " items"}</small>
            </div>

          </div>
          {/* TODO: change to real content when available */}
          <img className="Web-template-screen__illustration"
               // tslint:disable-next-line:max-line-length
               src="https://res.cloudinary.com/dops-digital/image/upload/v1551450240/Hospitality%20Hub/template-slider-illustration.jpg"
               // tslint:disable-next-line:max-line-length
               srcSet="https://res.cloudinary.com/dops-digital/image/upload/v1551450240/Hospitality%20Hub/template-slider-illustration.jpg"
               alt="get a template"/>

          </div>
        <div className="Web-template-screen__slider-section">
          <WebTemplateSlider/>
        </div>
      </section>
    );
  }
}
