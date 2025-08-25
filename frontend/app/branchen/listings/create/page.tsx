'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateListingPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');

  async function submit() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, slug }),
    });
    alert('Eintrag gesendet - wird nach Prüfung freigeschaltet');
    router.push('/branchen');
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Firma kostenlos eintragen</h1>
      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={submit}>
        Absenden
      </button>
    </div>
  );
}
