import React from "react";

const ButtonEllipse = (props) => {
   const { text, classes, routeTo } = props;
   return (
     <a className={"Button-ellipse " + classes} href={routeTo}>{text}</a>
   );
};

export default ButtonEllipse;
