import React from "react";
// import "./ButtonEllipse.scss";

const ButtonEllipse = (props) => {
   const { text, classes, routeTo } = props;
   return <>
     <a className={"Button-ellipse " + classes} href={routeTo}>{text}</a>
     <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </>;
};

export default ButtonEllipse;
