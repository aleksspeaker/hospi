import React, { Component } from "react";
import ControlBullet from "../../ControlBullet/ControlBullet";
import CourseInfoCard from "../../CourseInfoCard/CourseInfoCard";

import "./TimerSlider.scss";

interface ITimeSlider {
  mockObj?: any;
}

interface IBullet { amount: number; id: string; category: string; }

class TimerSlider extends Component<ITimeSlider> {
  public render() {
    const { controlBullets, topCourses } = this.props.mockObj;

    return (
      <section className="Timer-Slider">
        <div className="Control-bullet-container">
          {controlBullets.map((bulletItem: IBullet) => {
            return (
              <ControlBullet
                amount={bulletItem.amount}
                key={bulletItem.id}
                category={bulletItem.category}
              />
            );
          })}
        </div>
        <div className="Course-info-cards">
          <CourseInfoCard
            // tslint:disable-next-line:max-line-length
            imageURL="https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg"
            courseName={"Financial Analysis of \n" + "Hotel Investments Course"}
            complexityLevel="Beginner"
            price={2000}
            classes={"Course-info-card_third"}
          />
          <CourseInfoCard
            // tslint:disable-next-line:max-line-length
            imageURL="https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg"
            courseName={"Complete Guide to \n" + "Hotel Investments"}
            complexityLevel="Medium"
            price={2800}
            classes={"Course-info-card_third"}
          />
          <CourseInfoCard
            // tslint:disable-next-line:max-line-length
            imageURL="https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg"
            courseName={"Alternative Guide to \n" + "Hotel Investments"}
            complexityLevel="Professional"
            price={1999}
            classes={"Course-info-card_third"}
          />
        </div>
      </section>
    );
  }
}

const mockResponse = {
  controlBullets: [
    {
      amount: 12,
      category: "marketing",
      id: 0,
    },
    {
      amount: 4,
      category: "media",
      id: 1,
    },
    {
      amount: 32,
      category: "management",
      id: 2,
    },
    {
      amount: 14,
      category: "planning",
      id: 3,
    },
  ],
  topCourses: [
    {
      category: "marketing",
      courses: [
        {
          complexityLevel: "Beginner",
          courseName: "Financial Analysis Of Hotel Investments Course",
          id: 0,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg",
          price: 1990,
        },
        {
          complexityLevel: "Medium",
          courseName: "Ultimate Guide to Hotel Hospitality in 2019",
          id: 1,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg",
          price: 2000,
        },
        {
          complexityLevel: "Professional",
          courseName: "Alternative Course about Hotel Investments",
          id: 2,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg",
          price: 2410,
        },
      ],
    },

    {
      category: "media",
      courses: [
        {
          complexityLevel: "Beginner",
          courseName: "Financial Analysis Of Hotel Investments Course",
          id: 3,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg",
          price: 1990,
        },
        {
          complexityLevel: "Medium",
          courseName: "Ultimate Guide to Hotel Hospitality in 2019",
          id: 4,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg",
          price: 2000,
        },
        {
          complexityLevel: "Professional",
          courseName: "Alternative Course about Hotel Investments",
          id: 5,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg",
          price: 2500,
        },
      ],
    },

    {
      category: "management",
      courses: [
        {
          complexityLevel: "Beginner",
          courseName: "Financial Analysis Of Hotel Investments Course",
          id: 6,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg",
          price: 1990,
        },
        {
          complexityLevel: "Medium",
          courseName: "Ultimate Guide to Hotel Hospitality in 2019",
          id: 7,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg",
          price: 2000,
        },
        {
          complexityLevel: "Professional",
          courseName: "Alternative Course about Hotel Investments",
          id: 8,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg",
          price: 2300,
        },
      ],
    },
    {
      category: "planning",
      courses: [
        {
          complexityLevel: "Beginner",
          courseName: "Financial Analysis Of Hotel Investments Course",
          id: 9,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg",
          price: 1890,
        },
        {
          complexityLevel: "Medium",
          courseName: "Ultimate Guide to Hotel Hospitality in 2019",
          id: 10,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg",
          price: 2000,
        },
        {
          complexityLevel: "Professional",
          courseName: "Alternative Course about Hotel Investments",
          id: 11,
          imageURL:
            "https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg",
          price: 2000,
        },
      ],
    },
  ],
};

TimerSlider.defaultProps = {
  mockObj: mockResponse,
};

export default TimerSlider;
