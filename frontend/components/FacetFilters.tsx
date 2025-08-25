'use client';
import { useState } from 'react';

export function FacetFilters() {
  const [openNow, setOpenNow] = useState(false);
  return (
    <div className="flex gap-4 mb-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={openNow}
          onChange={(e) => setOpenNow(e.target.checked)}
        />
        Jetzt geöffnet
      </label>
    </div>
  );
}
