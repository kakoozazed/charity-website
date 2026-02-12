"use client";

import { BRAND } from "@/styles/brand";

export default function Donate() {
  const copyAccountNumber = () => {
    navigator.clipboard.writeText("1022203463357");
    alert("Account number copied to clipboard!");
  };

  return (
    <section id="donate" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: BRAND.blue }}>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left column - Main message */}
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
                Your contribution transforms lives. Choose your preferred way to support.
              </p>
              
              {/* Bank Account Details */}
              <div className="mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                  Bank Transfer Details
                </h3>
                <div className="mt-3 space-y-2 text-white">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Account Name:</span>
                    <span className="font-semibold">Charity for children's ministry</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Account Number:</span>
                    <span className="font-semibold font-mono">1022203463357</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="text-white/80">Bank:</span>
                    <span className="font-semibold">Equity Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Swift Code:</span>
                    <span className="font-semibold font-mono">EQBLUGKA</span>
                  </div>
                </div>
                <button
                  onClick={copyAccountNumber}
                  className="mt-3 w-full rounded-lg bg-white/20 px-3 py-2 text-xs font-bold text-white transition-all hover:bg-white/30"
                >
                  Copy Account Number
                </button>
              </div>
            </div>

            {/* Right column - Quick actions */}
            <div className="rounded-3xl bg-white p-6">
              <h3 className="text-lg font-extrabold" style={{ color: BRAND.blue }}>
                Quick actions
              </h3>

              <div className="mt-4 grid gap-3">
                <a
                  href="#contact"
                  className="rounded-xl px-4 py-3 text-sm font-extrabold text-center transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: BRAND.pink, color: "white" }}
                >
                  💝 I want to donate
                </a>

                <a
                  href="#contact"
                  className="rounded-xl px-4 py-3 text-sm font-extrabold text-center transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: BRAND.yellow, color: BRAND.blue }}
                >
                  👧🏽 I want to sponsor a child
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border-2 px-4 py-3 text-sm font-extrabold text-center transition-all hover:bg-slate-50 active:scale-95"
                  style={{ borderColor: BRAND.blue, color: BRAND.blue }}
                >
                  🤝 I want to volunteer / partner
                </a>
              </div>

              {/* Mobile Money Options */}
              <div className="mt-5 space-y-3">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-4 text-slate-500">mobile money</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {/* <div className="rounded-xl border border-slate-200 p-3 text-center">
                    <div className="text-xs font-bold text-slate-500">MTN</div>
                    <div className="font-mono text-sm font-semibold text-slate-800">+256 700 000000</div>
                  </div> */}
                  <div className="rounded-xl border border-slate-200 p-3 text-center">
                    <div className="text-xs font-bold text-slate-500">Airtel</div>
                    <div className="font-mono text-sm font-semibold text-slate-800">+256 706 522 508</div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  Contact us for mobile money numbers
                </p>
              </div>

              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: "rgba(48,46,153,0.06)" }}>
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <div>
                    <div className="text-xs font-bold text-slate-500">Payment Confirmation</div>
                    <div className="mt-1 text-sm text-slate-700">
                      After transfer, please{" "}
                      <a href="#contact" className="font-bold underline underline-offset-2" style={{ color: BRAND.blue }}>
                        contact us
                      </a>{" "}
                      with your receipt for acknowledgment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}