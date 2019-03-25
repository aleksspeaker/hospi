import React from "react";
import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";

import "./PartnershipIntro.scss";

const PartnershipIntro = ({ title, buttonText }) => {
  return (
    <div className="Partnership-intro">
      <h1 className="Partnership-intro__title">{title}</h1>
      <div className="Partnership-intro__links">
        <ButtonEllipse
          text="contact us"
          classes={"Button-ellipse_orange arrow-white"}
        />
        <ButtonEllipse
          text={buttonText}
          classes={"Button-ellipse_white arrow-dark"}
        />
      </div>

      <img className="Partnership-intro__illustration"
        src="https://res.cloudinary.com/dops-digital/image/upload/v1553521566/Hospitality%20Hub/course-partner.svg"
        alt=""
      />
    </div>
  );
};

export default PartnershipIntro;
