import Link from 'next/link';
import { ListingCard } from '../../components/ListingCard';

async function fetchLatest() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return res.json();
}

export default async function BranchenPage() {
  const categories = await fetchLatest();
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Branchen</h1>
      <input
        type="text"
        placeholder="Branche oder Firma suchen"
        className="border p-2 w-full"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((c: any) => (
          <Link key={c.id} href={`/branchen/${c.slug}`} className="underline">
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
