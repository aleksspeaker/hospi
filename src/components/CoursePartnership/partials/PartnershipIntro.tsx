import React from "react";
import ButtonEllipse from "../../ButtonEllipse/ButtonEllipse";

import "./PartnershipIntro.scss";


const PartnershipIntro = ({ title }) => {
  return (
    <div className="Partnership-intro">
      <h1 className="Partnership-intro__title">{title}</h1>
      <ButtonEllipse text={''} classes={'Button-ellipse_orange arrow-white'}/>
    </div>
  );
};

export default PartnershipIntro;
