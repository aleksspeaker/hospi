import React from 'react';

interface INumericalCategoryProps {
  amount: string;
  category: string;
  withDot?: boolean;
}

const NumericalCategory = (props: INumericalCategoryProps) => {
  const {amount, category} = props;
  return (
    <div className="Numerical-category">
      <h3>{String(amount)}</h3>
      <small>{category}</small>
    </div>
  );
};

export default NumericalCategory;
