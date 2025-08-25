import { ListingCard } from '../../components/ListingCard';
import { FacetFilters } from '../../components/FacetFilters';
import { Pagination } from '../../components/Pagination';

interface Props {
  params: { category: string };
  searchParams: { page?: string };
}

async function fetchListings(category: string, page: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${category}/listings?skip=${(page - 1) * 20}`,
  );
  return res.json();
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const page = Number(searchParams.page || 1);
  const listings = await fetchListings(params.category, page);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">{params.category}</h1>
      <FacetFilters />
      <div className="grid gap-4">
        {listings.map((l: any) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
}
