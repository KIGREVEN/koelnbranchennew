interface Props {
  params: { guide: string };
}

export default function GuidePage({ params }: Props) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">Guide: {params.guide}</h1>
      {/* Unterkategorien könnten hier verlinkt werden */}
    </div>
  );
}
