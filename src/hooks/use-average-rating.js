export default function useAverageRating(reviews) {
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);

  return (sum / reviews.length).toFixed(2);
}
