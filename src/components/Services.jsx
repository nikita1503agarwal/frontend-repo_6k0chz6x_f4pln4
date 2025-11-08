import { Home, Building2, Sofa, Bath } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Interiors",
    desc: "Complete home interiors including living, bedrooms, kitchens, and balconies tailored to your lifestyle.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    desc: "Elegant and efficient offices, retail, cafés, and hospitality spaces that elevate your brand.",
  },
  {
    icon: Sofa,
    title: "Custom Furniture",
    desc: "Bespoke furniture and built‑ins crafted with premium materials and precise detailing.",
  },
  {
    icon: Bath,
    title: "Renovations",
    desc: "Transformations and makeovers with minimal downtime and optimized budgets.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Services</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">
              From concept to completion, we manage every detail with a single point of contact.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-400 sm:inline-block">
            Get a quote
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
