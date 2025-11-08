import Hero from "./components/Hero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="text-lg font-semibold tracking-tight text-zinc-900">Jomson</a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-700 sm:flex">
          <a href="#services" className="hover:text-zinc-900">Services</a>
          <a href="#showcase" className="hover:text-zinc-900">Work</a>
          <a href="#contact" className="hover:text-zinc-900">Contact</a>
          <a
            href="#contact"
            className="rounded-lg bg-zinc-900 px-3 py-2 font-medium text-white hover:bg-zinc-800"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Jomson Interiors. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm text-zinc-600">
          <a href="#" className="hover:text-zinc-900">Instagram</a>
          <a href="#" className="hover:text-zinc-900">Facebook</a>
          <a href="#" className="hover:text-zinc-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
