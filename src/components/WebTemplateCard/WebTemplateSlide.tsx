import React from "react";

import "./WebTemplateCard.scss";

export const WebTemplateCard = ({
  templateName,
  templatePrice,
  templatePreview,
}) => {
  return (
    <span className="Web-template-slider__slide-container">
      <article className="Web-template-card">
        <small className="Web-template-card__template-price">
          {"$" + String(templatePrice)}
        </small>
        <h6 className="Web-template-card__template-name">{templateName}</h6>
        <img
          className="Web-template-card__preview"
          src={templatePreview}
          alt={templateName}
        />
      </article>
    </span>
  );
};
