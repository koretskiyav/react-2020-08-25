import React from 'react';
import Reviews from '../components/reviews';
import { useParams } from 'react-router-dom';

function ReviewsPage() {
  const { restId } = useParams();

  return <Reviews id={restId} />;
}

export default ReviewsPage;
