import React from "react";
import "./ButtonEllipse.scss";

const ButtonEllipse = (props) => {
   const { text, classes, routeTo } = props;
   return (
     <a className={"Button-ellipse " + classes} href={routeTo}>{text}</a>
   );
};

export default ButtonEllipse;
