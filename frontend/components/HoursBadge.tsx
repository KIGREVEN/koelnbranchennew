export function HoursBadge({ open }: { open: boolean }) {
  return (
    <span className={open ? 'text-green-600' : 'text-red-600'}>
      {open ? 'Jetzt geöffnet' : 'Geschlossen'}
    </span>
  );
}
