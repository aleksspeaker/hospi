import generateUniqueIndex from "./generateUniqueIndex";

// @ts-ignore
import cp1 from "../../static/images/institutions.png";
// @ts-ignore
import cp2 from "../../static/images/puzzle_3.png";
// @ts-ignore
import cp3 from "../../static/images/twin_2.png";
// @ts-ignore
import cp4 from "../../static/images/icon_light_and_micro.png";

export const mockCoursePartnership = {
  title: "Course Partnership Program.",
  buttonText: "academic partnership",
  benefits: [
    {
      icon: cp1,
      paragraph: "Providing or aiming to provide hospitality degrees.",
      title: "Academic \n" + "Institutions.",
      id: generateUniqueIndex()
    },
    {
      icon: cp2,
      paragraph: "Organisations with expertise in a hospitality.",
      title: "Specialist \n" + "Organisations.",
      id: generateUniqueIndex()
    },
    {
      icon: cp3,
      paragraph:
        "Specialist with high-profile expertise in different hospitality segments.",
      title: "Hospitality \n" + "Professionals.",
      id: generateUniqueIndex()
    },
    {
      icon: cp4,
      paragraph: "Hotels and resorts with higher output.",
      title: "Industry \n" + "Leaders.",
      id: generateUniqueIndex()
    }
  ]
};
