import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs text-zinc-700 backdrop-blur">
              <Star className="h-3.5 w-3.5 text-amber-500" />
              Award‑Winning Interior Design Studio
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Jomson Interiors
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              We craft warm, functional spaces for modern living — from residences to boutique commercial projects. Thoughtful design, meticulous execution, and timeless finishes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-400"
              >
                View our work
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-zinc-600">
              <div>
                <div className="font-semibold text-zinc-900">150+ projects</div>
                Completed across residential & commercial
              </div>
              <div className="h-10 w-px bg-zinc-200" />
              <div>
                <div className="font-semibold text-zinc-900">10+ years</div>
                Designing in India & beyond
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1505692794403-34d4982b9049?q=80&w=1600&auto=format&fit=crop"
                alt="Modern living room designed by Jomson Interiors"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
