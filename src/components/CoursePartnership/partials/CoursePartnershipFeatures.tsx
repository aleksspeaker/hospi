import React from "react";
import FeatureWithIcon from "../../FeatureWithIcon/FeatureWithIcon";
import { mockCoursePartnership } from "../../../helpers/mockObjects";

import "./CoursePartnershipFeatures.scss";

const CoursePartnershipFeatures = () => {
  return (
    <section className="Course-partnership-features">
      <div className="Course-partnership-features__list">
        {mockCoursePartnership.benefits.map(item => {
          return (
            <FeatureWithIcon
              key={item.id}
              icon={item.icon}
              paragraph={item.paragraph}
              title={item.title}
            />
          );
        })}
      </div>
      <p className="Course-partnership-features__outro">
        We also work with promotional partners. This type of partner doesn’t
        create courses but instead promotes HospitalityHub to specific
        audiences.
      </p>
    </section>
  );
};

export default CoursePartnershipFeatures;
