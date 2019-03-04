import React from "react";

const ButtonEllipse = (props) => {
   const { text, classes, routeTo } = props;
   return <>
     <a className={"Button-ellipse " + classes} href={routeTo}>{text}</a>
     <style jsx>{`
      .Button-ellipse {
          display: inline-block;
          border-radius: 18px;
          font-size: 11px;
          font-weight: 500;
          padding: 12px 17px;
          color: white;
          text-transform: uppercase;
          cursor: pointer;
      }

        .white {
          background: #fff;
          color: red;
        }

        .white:hover {
          background: #d7d7d7;
        }

        .orange {
          background: orange;
        }
        .orange:hover {
          background: #ff8153;
        }

        .gray {
          background: #333;
          font-weight: 600;
          color: #222;
        }
        .gray:hover {
          background: #c6c7c5;
        }

        .pale {
          opacity: .8;
          background-color: #bc4a24;
          font-weight: 600;
          color: white;
        }
        .pale:hover {
          background: #e35a2b;
        }

        .arrow-white::after {
          content: url("../../../assets/images/arrow-right-white.svg");
          margin-left: 25px ;
        }


        .arrow-dark::after {
          content: url("../../../assets/images/arrow-right-dark.svg");
          margin-left: 25px;
        }
      `}</style>
    </>;
};

export default ButtonEllipse;
