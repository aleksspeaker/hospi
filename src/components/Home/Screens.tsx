import React from 'react';

import ButtonEllipse from '../ButtonEllipse/ButtonEllipse';
import NumericalCategory from '../NumericalCategory/NumericalCategory';
// import './Screens.scss';

interface IProps {
  subscribers: number;
  videos: number;
  programs: number;
}

export default (props: IProps) => {
  const { subscribers, videos, programs } = props;
  const numCategs = () => (
    <>
      <section className="Numerical-categories">
        <NumericalCategory amount={subscribers} category="subscribers" />
        <NumericalCategory amount={videos} category="videos" />
        <NumericalCategory amount={programs} category="programs" />
      </section>
      <style jsx>{`
        section {
          display: flex;
          position: absolute;
          bottom: 30px;
          font-weight: 500;
        }
      `}</style>
    </>
  );

  return (
    <section className="First-screen">
      <div className="text-content">
        <div className="Text-container">
          <h1 className="title">
            <span>Hospitality</span>
            <span>classes, inspiration,</span>
            and tips in.
          </h1>
          <p className="intro">
            <span> We know which problems hoteliers</span>
            <span>face every day and we are ready to</span>
            solve these problems.
          </p>
          <div className="scroll-tip">
            <span />
            <span>Scroll down</span>
          </div>

          {numCategs()}
        </div>
        <ButtonEllipse
          classes={'Button-ellipse_orange arrow-white'}
          routeTo={'#'}
          text="Find the program"
        />
      </div>

      <div className="First-screen__video-section">
        <img
          // tslint:disable-next-line:max-line-length
          src="https://res.cloudinary.com/dops-digital/image/upload/v1551182383/Hospitality%20Hub/placeholder_first_screen.png"
          alt="video sprite"
        />
      </div>
      <style jsx>{`
        .First-screen {
          height: calc(100vh - 47px); // header height
          position: relative;
          box-sizing: border-box;
        }
        .text-content {
          height: calc(100% - 250px); // container - video height
          width: 100%;
          box-sizing: border-box;
          padding: 50px 30px 30px $OFFSET;
          position: relative;
          min-height: 460px;
        }
        .Button-ellipse {
          position: absolute;
          right: 30px;
          bottom: 30px;
          padding-right: 15px;
        }
        .title {
          font-size: 2.8em;
          line-height: 41px;
          letter-spacing: -1px;
          font-weight: 500;
          margin: 0;
        }
        .title span {
          display: block;
        }
        .intro {
          color: $PALE_FONT;
          margin: 50px 0;
          line-height: 22px;
        }
        .intro span {
          display: block;
        }
        .scroll-tip {
          color: $PALE_FONT;
          display: inline-block;
          }
        }
        .scroll-tip nth-of-type(2) {
          position: relative;
          top: 4px;
        }
        .scroll-tip span :nth-of-type(1) {
            border-radius: 50%;
            width: 26px;
            height: 26px;
            float: left;
            /* padding: 0px; */
            text-align: center;
            background: #e6e6e6;
            position: relative;
            margin-right: 10px;
        }
        .scroll-tip span :nth-of-type(1)::after {
          content: url('../../../../assets/images/black-arrow.svg');
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      `}</style>
    </section>
  );
};
