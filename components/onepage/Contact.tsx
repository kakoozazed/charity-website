import Link from "next/link";
import { site } from "@/data/site";
import { BRAND } from "@/styles/brand";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider" style={{ color: BRAND.pink }}>
              Contact us
            </div>
            <h2 className="mt-2 text-2xl font-extrabold" style={{ color: BRAND.blue }}>
              Let’s work together
            </h2>
            <p className="mt-3 text-slate-700">
              Reach out for donations, sponsorship, volunteering, partnerships, or any inquiries.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold text-slate-500">Email</div>
                <div className="mt-1 font-semibold text-slate-800">{site.contacts.email}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold text-slate-500">Phone</div>
                <div className="mt-1 font-semibold text-slate-800">{site.contacts.phone}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold text-slate-500">Location</div>
                <div className="mt-1 font-semibold text-slate-800">{site.contacts.location}</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h3 className="text-lg font-extrabold" style={{ color: BRAND.blue }}>
              Send a message
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              UI-only for now. Next step: connect to Email (Resend) or WhatsApp.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Full name</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Phone</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4"
                    placeholder="+256..."
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4"
                  rows={5}
                  placeholder="Tell us how you would like to support..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl px-4 py-3 text-sm font-extrabold hover:opacity-95"
                style={{ backgroundColor: BRAND.pink, color: "white" }}
              >
                Send Message
              </button>

              <div className="text-center text-xs text-slate-500">
                Or email us directly:{" "}
                <Link className="font-bold" href={`mailto:${site.contacts.email}`}>
                  {site.contacts.email}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
