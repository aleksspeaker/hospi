import React from "react";

import "./FeatureWithIcon.scss";

const FeatureWithIcon = ({ icon, title, paragraph }) => {
  return (
    <article className="Feature-with-icon">
      <img className="Feature-with-icon__icon" src={icon} alt="icon" />
      <h6 className="Feature-with-icon__title">{title}</h6>
      <p className="Feature-with-icon__paragraph">{paragraph}</p>
    </article>
  );
};

export default FeatureWithIcon;
