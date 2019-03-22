import React from "react";
import ReactSwipe from "react-swipe";

import ControlArrows from "../ControlArrows";
import { WebTemplateCard } from "../WebTemplateCard/WebTemplateSlide";

import "./WebTemplateSlider.scss";

interface ITemplateItem { templateName: any; templatePrice: any; templatePreview: any; }

export const WebTemplateSlider = ({ responseObj }) => {
  let ReactSwipeElm;

  return (
    <section className="Web-template-slider">
      <ControlArrows
        onPrev={() => {
          ReactSwipeElm.prev();
        }}
        onNext={() => {
          ReactSwipeElm.next();
        }}
      />

      <ReactSwipe ref={(el: any) => (ReactSwipeElm = el)}>
        {responseObj.map((templateItem: ITemplateItem) => {
          return (
            <span className={"Web-template-slider__slide-container"}>
              <WebTemplateCard
                templateName={templateItem.templateName}
                templatePrice={templateItem.templatePrice}
                templatePreview={templateItem.templatePreview}
              />
            </span>
          );
        })}
      </ReactSwipe>
    </section>
  );
};

const mockTemplates = [
  {
    id: 0,
    templateName: "Great Template for small hotels",
    templatePreview:
      "https://res.cloudinary.com/dops-digital/image/upload/v1551458153/Hospitality%20Hub/template-preview.jpg",
    templatePrice: 86,
  },
  {
    id: 1,
    templateName: "Five star hotel template",
    templatePreview:
      "https://res.cloudinary.com/dops-digital/image/upload/v1551706581/Hospitality%20Hub/WB05N7852.png",
    templatePrice: 94,
  },
  {
    id: 2,
    templateName: "New Year style template",
    templatePreview:
      "https://res.cloudinary.com/dops-digital/image/upload/v1551706335/Hospitality%20Hub/template-photo.jpg",
    templatePrice: "112",
  },
];

WebTemplateSlider.defaultProps = {
  responseObj: mockTemplates,
};
