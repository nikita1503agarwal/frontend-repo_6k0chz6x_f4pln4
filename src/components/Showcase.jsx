export default function Showcase() {
  const images = [
    "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616593969760-66ef2e2643e1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="showcase" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            A glimpse into our recent residential and commercial projects.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((src, idx) => (
            <figure key={idx} className="mb-4 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
              <img src={src} alt="Jomson Interiors project" className="h-auto w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
