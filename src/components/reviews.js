import React from 'react';

import CustomerReview from './customerreview';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((customerReview) => (
        <CustomerReview
          key={customerReview.id}
          customerReview={customerReview}
        />
      ))}
    </div>
  );
}
