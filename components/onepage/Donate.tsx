import { BRAND } from "@/styles/brand";

export default function Donate() {
  return (
    <section id="donate" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: BRAND.blue }}>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-extrabold"
                style={{ backgroundColor: BRAND.yellow, color: BRAND.blue }}
              >
                Donate • Sponsor • Volunteer
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-white md:text-3xl">
                Help a child stay in school and live healthy
              </h2>
              <p className="mt-3 text-white/85">
                We can add Mobile Money/Bank details here when you’re ready. For now, send a message and we’ll guide you.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6">
              <h3 className="text-lg font-extrabold" style={{ color: BRAND.blue }}>
                Quick actions
              </h3>

              <div className="mt-4 grid gap-3">
                <a
                  href="#contact"
                  className="rounded-xl px-4 py-3 text-sm font-extrabold hover:opacity-95"
                  style={{ backgroundColor: BRAND.pink, color: "white" }}
                >
                  I want to donate
                </a>

                <a
                  href="#contact"
                  className="rounded-xl px-4 py-3 text-sm font-extrabold hover:opacity-95"
                  style={{ backgroundColor: BRAND.yellow, color: BRAND.blue }}
                >
                  I want to sponsor a child
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border-2 px-4 py-3 text-sm font-extrabold hover:bg-slate-50"
                  style={{ borderColor: BRAND.blue, color: BRAND.blue }}
                >
                  I want to volunteer / partner
                </a>
              </div>

              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "rgba(48,46,153,0.06)" }}>
                <div className="text-xs font-bold text-slate-500">Note</div>
                <div className="mt-1 text-sm text-slate-700">
                  Tell us what you want to support and we’ll respond with the right details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
