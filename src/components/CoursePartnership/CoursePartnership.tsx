import React from "react";
import PartnershipIntro from "./partials/PartnershipIntro";
import CoursePartnerDescription from "./partials/CoursePartnerDescription";
import CoursePartnershipFeatures from "./partials/CoursePartnershipFeatures";
import { mockCoursePartnership } from "../../helpers/mockObjects";

import "./CoursePartnership.scss";

const CoursePartnership = () => {
  return (
    <section className="Course-partnership">
      <PartnershipIntro
        title={mockCoursePartnership.title}
        buttonText={mockCoursePartnership.buttonText}
      />
      <CoursePartnerDescription />
      <CoursePartnershipFeatures />
    </section>
  );
};

export default CoursePartnership;
