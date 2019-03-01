import React, { Component } from "react";
import { Author } from "../../Author/Author";
import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";
import ControlArrows from "../../ControlArrows";

import './TopPostsScreen.scss';

interface ITopPostsScreenProps {
  hubSubscribers: number;
  postsPrice: number;
}

export class TopPostsScreen extends Component<ITopPostsScreenProps> {

  public render() {

    const {hubSubscribers, postsPrice} = this.props;

    return (
      <section className="Top-posts-screen">
        <div className="Top-posts-screen__text-content">
          <div className="Text-container">
            <small className="Text-container__slider-label">
              Featured articles
            </small>
            <section className="Posts-slider">
              <div className="Posts-slider__slide">
                <h3>
                  What Makes
                  Good Hospitality In Bars?
                </h3>

                <Author name={"Jessica Lee"} avatarURL="../../../assets/images/user-avatar-1.jpg"/>

              </div>

              <ControlArrows classes={"Control-arrows_gray"}/>

            </section>
          </div>

          <img className="Top-posts-screen__illustration"
               // tslint:disable-next-line:max-line-length
               src="https://res.cloudinary.com/dops-digital/image/upload/v1551362017/Hospitality%20Hub/main-screen-3.svg"
               alt="posts illustration"/>
        </div>

        <div className="Screen-footer">
          <div className="Screen-footer__open-hub">
            <small>
              {String(hubSubscribers) + " subscribers."}
            </small>
            <span >
              Watch, read and learn from the best.
            </span>

            <ButtonEllipse
              classes={"Button-ellipse_gray_pale arrow-white"}
              routeTo={"/"}
              text={"open hub"}
            />
          </div>

          <div className="Screen-footer__open-posts">

            <span>
              Started price for unlimited reading.
            </span>
            <p>
              { String(postsPrice) + "$ " }
              <small>year</small>
            </p>

            <ButtonEllipse
              classes={"Button-ellipse_white arrow-dark"}
              routeTo={"/"}
              text={"subscribe"}
            />
          </div>
        </div>

      </section>
    );
  }
}
