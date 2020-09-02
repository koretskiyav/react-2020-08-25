import React from 'react';

const Rate: React.FC = ({ rate }) => (
  <>
    {Array.from(Array(5).keys()).map((index) => (
      <span key={index}>{index >= rate ? '☆' : '★'}</span>
    ))}
  </>
);

export default Rate;
