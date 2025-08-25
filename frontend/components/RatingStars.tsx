export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="text-yellow-500">
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </div>
  );
}
