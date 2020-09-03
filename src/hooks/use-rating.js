export default function useRating(rating) {
  const positive = Math.floor(rating);
  const negative = 5 - Math.ceil(rating);
  const uncertain = Math.max(0, 5 - positive - negative);

  return { positive, uncertain, negative };
}
