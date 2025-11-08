import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    setStatus(`Thanks ${name}, we’ll be in touch shortly.`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Let’s build your space</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">
            Share a few details about your project. Our team will reach out within 24 hours.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-zinc-800">Name</label>
                <input name="name" required className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-900 focus:ring-2" />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-800">Email</label>
                <input type="email" name="email" required className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-900 focus:ring-2" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-zinc-800">Project details</label>
                <textarea name="message" rows="4" className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-zinc-900 focus:ring-2" placeholder="Apartment in Kochi, 3BHK full interior, modern minimal style..." />
              </div>
            </div>
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
                Send message
              </button>
              {status && <p className="mt-3 text-sm text-emerald-600">{status}</p>}
            </div>
          </form>

          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-zinc-900">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-800">Email</div>
                <a href="mailto:hello@jomson.com" className="text-sm text-zinc-600 hover:text-zinc-900">hello@jomson.com</a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-zinc-900">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-800">Phone</div>
                <a href="tel:+919999999999" className="text-sm text-zinc-600 hover:text-zinc-900">+91 99999 99999</a>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-medium text-zinc-800">Studios</h3>
              <p className="mt-2 text-sm text-zinc-600">Kochi • Bengaluru • Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
