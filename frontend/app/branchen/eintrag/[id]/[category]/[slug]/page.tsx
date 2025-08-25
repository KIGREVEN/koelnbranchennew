import { RatingStars } from '../../../../../components/RatingStars';
import { ReviewForm } from '../../../../../components/ReviewForm';

interface Props {
  params: { id: string; category: string; slug: string };
}

async function fetchListing(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`);
  return res.json();
}

export default async function ListingDetail({ params }: Props) {
  const listing = await fetchListing(params.id);
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">{listing.name}</h1>
      <RatingStars rating={listing.reviews?.[0]?.rating || 0} />
      <div>Adresse: {listing.address?.street}</div>
      <ReviewForm listingId={listing.id} />
    </div>
  );
}
