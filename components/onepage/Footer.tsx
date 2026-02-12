import { site } from "@/data/site";
import { BRAND } from "@/styles/brand";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: BRAND.blue }}>
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/85">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-extrabold" style={{ color: BRAND.yellow }}>
              {site.name}
            </div>
            <div className="mt-1">{site.contacts.location}</div>
            <div className="mt-1">
              {site.contacts.email} • {site.contacts.phone}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
            <a className="rounded-full px-3 py-2 text-xs font-extrabold hover:bg-white/10" href="#home">
              Back to top ↑
            </a>
            <a
              href="#donate"
              className="rounded-full px-3 py-2 text-xs font-extrabold hover:opacity-95"
              style={{ backgroundColor: BRAND.pink, color: "white" }}
            >
              Donate / Sponsor
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
