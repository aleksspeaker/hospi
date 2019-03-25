import React from "react";
import PartnershipIntro from "./partials/PartnershipIntro";
import { mockCoursePartnership } from "../../helpers/mockObjects";

import "./CoursePartnership.scss";

const CoursePartnership = () => {
  return (
    <section className="Course-partnership">
      <PartnershipIntro title={mockCoursePartnership.title} />
        {console.log(mockCoursePartnership)}
    </section>
  );
};

export default CoursePartnership;
