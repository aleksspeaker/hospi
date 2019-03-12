import React, {Component} from 'react';

import './CourseInfoCard.scss';

interface ICourseInfoCardProps {
  imageURL: string;
  courseName: string;
  complexityLevel: number;
  classes: string[];
  price: number;
}

class CourseInfoCard extends Component<ICourseInfoCardProps> {

  public render() {
    const  {imageURL, courseName, complexityLevel, classes, price} = this.props;
    return (
      <article className={"Course-info-card " + classes}>
        <img className="Course-info-card__illustration" src={imageURL} alt={courseName}/>
        <div className="Course-info-card__description">
          <small>{complexityLevel}</small>
          <h5>{courseName}</h5>
          <span>{ "$" + String(price) }</span>
        </div>
      </article>
    );
  }
}

export default CourseInfoCard;
