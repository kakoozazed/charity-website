"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { BRAND } from "@/styles/brand";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    // Construct email body
    const subject = encodeURIComponent("Contact Form Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:${site.contacts.email}?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column - Contact information */}
          <div>
            <div 
              className="text-xs font-extrabold uppercase tracking-wider" 
              style={{ color: BRAND.pink }}
            >
              Contact us
            </div>
            <h2 
              className="mt-2 text-2xl font-extrabold" 
              style={{ color: BRAND.blue }}
            >
              Let&rsquo;s work together
            </h2>
            <p className="mt-3 text-slate-700">
              Reach out for donations, sponsorship, volunteering, partnerships, or any inquiries.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold text-slate-500">Email</div>
                <div className="mt-1 font-semibold text-slate-800">
                  <Link href={`mailto:${site.contacts.email}`} className="hover:underline">
                    {site.contacts.email}
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold text-slate-500">Phone</div>
                <div className="mt-1 font-semibold text-slate-800">
                  <Link href={`tel:${site.contacts.phone}`} className="hover:underline">
                    {site.contacts.phone}
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-bold text-slate-500">Location</div>
                <div className="mt-1 font-semibold text-slate-800">
                  {site.contacts.location}
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h3 
              className="text-lg font-extrabold" 
              style={{ color: BRAND.blue }}
            >
              Send a message
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              This will open your default email app (Gmail, Outlook, Apple Mail, etc.)
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label 
                    htmlFor="name" 
                    className="text-sm font-semibold text-slate-700"
                  >
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label 
                    htmlFor="phone" 
                    className="text-sm font-semibold text-slate-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="text-sm font-semibold text-slate-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="text-sm font-semibold text-slate-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition-all focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
                  rows={5}
                  placeholder="Tell us how you would like to support or what you'd like to inquire about..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl px-4 py-3 text-sm font-extrabold uppercase tracking-wide transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
                style={{ backgroundColor: BRAND.pink, color: "white" }}
              >
                Send Message
              </button>

              <div className="text-center text-xs text-slate-400">
                <span className="text-red-500">*</span> Required fields
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-4 text-slate-500">or</span>
                </div>
              </div>

              <div className="text-center text-sm text-slate-600">
                Email us directly:{" "}
                <Link 
                  href={`mailto:${site.contacts.email}`}
                  className="font-bold hover:underline"
                  style={{ color: BRAND.blue }}
                >
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