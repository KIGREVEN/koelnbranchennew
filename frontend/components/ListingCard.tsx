import Link from 'next/link';
import { RatingStars } from './RatingStars';
import { SponsoredBadge } from './SponsoredBadge';
import { HoursBadge } from './HoursBadge';

export function ListingCard({ listing }: { listing: any }) {
  return (
    <div className="border p-4 rounded">
      <div className="flex justify-between">
        <Link href={`/branchen/eintrag/${listing.id}/${listing.categories?.[0]?.category?.slug}/${listing.slug}`} className="font-bold">
          {listing.name}
        </Link>
        {listing.sponsoredRank > 0 && <SponsoredBadge />}
      </div>
      <RatingStars rating={listing.reviews?.[0]?.rating || 0} />
      <HoursBadge open={true} />
    </div>
  );
}
