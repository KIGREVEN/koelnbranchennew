'use client';
import { useState } from 'react';

export function ReviewForm({ listingId }: { listingId: number }) {
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  async function submit() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${listingId}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating, text }),
    });
    setText('');
    alert('Bewertung eingereicht, wartet auf Moderation.');
  }

  return (
    <div className="space-y-2">
      <textarea
        className="border p-2 w-full"
        placeholder="Deine Bewertung"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2" onClick={submit}>
        Abschicken
      </button>
    </div>
  );
}
