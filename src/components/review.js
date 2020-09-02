import React from 'react';
import Rate from './rate';
import reviewStyles from './review.module.css';

const Review: React.FC = ({ user, text, rating }) => (
  <div className={reviewStyles.review}>
    <h3>
      {user} <Rate rate={rating} />
    </h3>
    <p>{text}</p>
  </div>
);

export default Review;
