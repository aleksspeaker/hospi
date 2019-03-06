import React from 'react';

interface INumericalCategoryProps {
  amount: string;
  category: string;
  withDot?: boolean;
}

const NumericalCategory = (props: INumericalCategoryProps) => {
  const { amount, category } = props;
  return (
    <div>
      <h3>{amount}</h3>
      <small>{category}</small>
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
          color: red;
          font-size: 14px;
          margin-top: 4px;
        }
      `}</style>
    </div>
  );
};

export default NumericalCategory;
