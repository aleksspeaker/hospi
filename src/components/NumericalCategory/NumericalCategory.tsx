import React from 'react';
// import "./NumericalCategory.scss";

interface INumericalCategoryProps {
  amount: number;
  category: string;
}

const NumericalCategory = (props: INumericalCategoryProps) => {
  const { amount, category } = props;
  return (
    <>
      <div className="Numerical-category">
        <h3>{amount}</h3>
        <small>{category}</small>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-start;
          margin-right: 100px;
        }
        h3 {
          font-size: 2.8em;
          font-weight: 500;
          margin: 0 15px 0 0;
        }
        small {
          color: $PALE_FONT;
          font-size: 14px;
          margin-top: 4px;
        }
        .Numerical-categories {
          display: flex;
          position: absolute;
          bottom: 30px;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default NumericalCategory;
