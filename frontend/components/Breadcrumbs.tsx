import Link from 'next/link';

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm mb-2">
      {items.map((item, idx) => (
        <span key={idx}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {idx < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
}
