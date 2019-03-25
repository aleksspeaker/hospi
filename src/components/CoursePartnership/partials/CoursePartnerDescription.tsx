import React from "react";

import "./CoursePartnerDescription.scss";

const CoursePartnerDescription = () => {
  return (
    <div className="Course-partner-description">
      <div className="Course-partner-description-upper">
        <h2 className="Course-partner-description-upper__title">
          What Is A Hospitality.Hub Course Partner?
        </h2>
        <p className="Course-partner-description-upper__intro">
          We partner specialist organisations to offer the best online
          hospitality courses. We’re always happy to talk if you’re interested
          in becoming a partner.
        </p>
      </div>
      <div className="Course-partner-description-lower">
        <p className="Course-partner-description-lower__intro">
          A Hospitality.Hub Course Partner is an organisation that helps us
          create courses. The partner creates part of the course content, with
          guidance from us on learning design, and we then work together to put
          the course onto the platform.
        </p>
      </div>
    </div>
  );
};

export default CoursePartnerDescription;
