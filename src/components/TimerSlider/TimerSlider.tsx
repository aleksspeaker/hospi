import React, { Component } from 'react';
import ControlBullet from '../ControlBullet/ControlBullet';
import CourseInfoCard from '../CourseInfoCard/CourseInfoCard';

import './TimerSlider.scss';

interface IMockResponse {
  controlBullets: any[];
  topCourses: any[];
}

interface ITimerSliderProps {
  mockObj: IMockResponse;
}

interface ITimerSliderState {
  categories: any[];
  currentCategory: number;
}
const categories = [{ 0: 'marketing' }, { 1: 'media' }, { 2: 'management' }, { 3: 'planning' }];

const mockResponse = {
  controlBullets: [
    {
      amount: 12,
      category: 'marketing',
      id: 0,
    },
    {
      amount: 4,
      category: 'media',
      id: 1,
    },
    {
      amount: 32,
      category: 'management',
      id: 2,
    },
    {
      amount: 14,
      category: 'planning',
      id: 3,
    },
  ],
  topCourses: [
    {
      category: 'marketing',
      courses: [
        {
          complexityLevel: 'Beginner',
          courseName: 'Financial Analysis Of Hotel Investments Course',
          id: 0,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg',
          price: 1990,
        },
        {
          complexityLevel: 'Medium',
          courseName: 'Ultimate Guide to Hotel Hospitality in 2019',
          id: 1,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg',
          price: 2000,
        },
        {
          complexityLevel: 'Professional',
          courseName: 'Alternative Course about Hotel Investments',
          id: 2,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg',
          price: 2410,
        },
      ],
    },

    {
      category: 'media',
      courses: [
        {
          complexityLevel: 'Beginner',
          courseName: 'Media Ads Of Hotels Course',
          id: 3,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg',
          price: 1990,
        },
        {
          complexityLevel: 'Medium',
          courseName: 'Ultimate Media Development in 2019',
          id: 4,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg',
          price: 2000,
        },
        {
          complexityLevel: 'Professional',
          courseName: 'Course about Hotel Investments',
          id: 5,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg',
          price: 2500,
        },
      ],
    },
    {
      category: 'management',
      courses: [
        {
          complexityLevel: 'Beginner',
          courseName: 'Ultimate Guide to Hotel Management in 2019',
          id: 6,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg',
          price: 1990,
        },
        {
          complexityLevel: 'Medium',
          courseName: 'Ultimate Guide to Hotel Hospitality in 2019',
          id: 7,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg',
          price: 2000,
        },
        {
          complexityLevel: 'Professional',
          courseName: 'Alternative Course about Hotel Investments',
          id: 8,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg',
          price: 2300,
        },
      ],
    },
    {
      category: 'planning',
      courses: [
        {
          complexityLevel: 'Beginner',
          courseName: 'Financial Planning Of Hotel Investments Course',
          id: 9,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-1.svg',
          price: 1890,
        },
        {
          complexityLevel: 'Medium',
          courseName: 'Ultimate Guide to Hotel Hospitality in 2019',
          id: 10,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-2.svg',
          price: 2000,
        },
        {
          complexityLevel: 'Professional',
          courseName: 'Alternative Course about Hotel Investments',
          id: 11,
          imageURL:
            'https://res.cloudinary.com/dops-digital/image/upload/v1551290668/Hospitality%20Hub/illustration-3.svg',
          price: 2000,
        },
      ],
    },
  ],
};

class TimerSlider extends Component<ITimerSliderProps, ITimerSliderState> {
  public static defaultProps = {
    mockObj: mockResponse,
  };

  private static timeoutSwitcher: any;

  constructor(props: ITimerSliderProps) {
    super(props);
    this.state = {
      categories,
      currentCategory: 0,
    };
    this.updateCategoryOnTimer = this.updateCategoryOnTimer.bind(this);
  }

  public componentDidMount() {
    TimerSlider.timeoutSwitcher = setInterval(this.updateCategoryOnTimer, 8000);
  }

  public componentWillUnmount() {
    clearInterval(TimerSlider.timeoutSwitcher);
  }

  public updateCategoryOnTimer() {
    // FIXME: shadowed var
    // tslint:disable-next-line:no-shadowed-variable
    const { categories, currentCategory: currInd } = this.state;
    this.setState({
      currentCategory: currInd < categories.length - 1 ? currInd + 1 : 0,
    });
  }

  public updateOnClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>, data) {
    clearInterval(TimerSlider.timeoutSwitcher);

    this.setState({
      currentCategory: Number(data.ref),
    });
  }

  public render() {
    const { controlBullets, topCourses } = this.props.mockObj;
    // FIXME: shadowed var
    // tslint:disable-next-line:no-shadowed-variable
    const { currentCategory, categories } = this.state;

    return (
      <section className="Timer-Slider">
        <div className="Control-bullet-container">
          {controlBullets.map((bulletItem) => {
            return (
              <ControlBullet
                clicked={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
                  this.updateOnClick(e, {
                    elm: this.refs[bulletItem.id],
                    ref: bulletItem.id,
                  })
                }
                ref={bulletItem.id}
                key={bulletItem.id}
                amount={bulletItem.amount}
                category={bulletItem.category}
                isActive={currentCategory === bulletItem.id}
              />
            );
          })}
        </div>
        <div className="Course-info-cards">
          <section className="Course-info-card-holder">
            {topCourses.map((bunch, id) => {
              const firstCourse = bunch.courses[0];
              const courseCategory = bunch.category;

              return (
                <CourseInfoCard
                  key={id}
                  imageURL={firstCourse.imageURL}
                  courseName={firstCourse.courseName}
                  complexityLevel={firstCourse.complexityLevel}
                  price={firstCourse.price}
                  isActive={courseCategory === categories[currentCategory][currentCategory]}
                />
              );
            })}
          </section>
          <section className="Course-info-card-holder">
            {topCourses.map((bunch, id) => {
              const secondCourse = bunch.courses[1];
              const courseCategory = bunch.category;

              return (
                <CourseInfoCard
                  key={id}
                  imageURL={secondCourse.imageURL}
                  courseName={secondCourse.courseName}
                  complexityLevel={secondCourse.complexityLevel}
                  price={secondCourse.price}
                  isActive={courseCategory === categories[currentCategory][currentCategory]}
                />
              );
            })}
          </section>
          <section className="Course-info-card-holder">
            {topCourses.map((bunch, id) => {
              const thirdCourse = bunch.courses[2];
              const courseCategory = bunch.category;

              return (
                <CourseInfoCard
                  key={id}
                  imageURL={thirdCourse.imageURL}
                  courseName={thirdCourse.courseName}
                  complexityLevel={thirdCourse.complexityLevel}
                  price={thirdCourse.price}
                  isActive={courseCategory === categories[currentCategory][currentCategory]}
                />
              );
            })}
          </section>
        </div>
      </section>
    );
  }
}

export default TimerSlider;
