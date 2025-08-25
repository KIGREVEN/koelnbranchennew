'use client';
import { useRouter } from 'next/navigation';

export function Pagination({ page }: { page: number }) {
  const router = useRouter();
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={page <= 1}
        className="border px-2"
      >
        Zurück
      </button>
      <button
        onClick={() => router.push(`?page=${page + 1}`)}
        className="border px-2"
      >
        Weiter
      </button>
    </div>
  );
}
