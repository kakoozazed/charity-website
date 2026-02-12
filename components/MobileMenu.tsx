// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/styles/brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 rounded-lg p-2 md:hidden"
        style={{ color: 'white' }}
        aria-label="Menu"
      >
        <div className="relative h-6 w-6">
          <span 
            className={`absolute left-0 top-0 h-0.5 w-6 transform bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span 
            className={`absolute left-0 top-2.5 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
            }`}
          />
          <span 
            className={`absolute left-0 top-5 h-0.5 w-6 transform bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-64 transform bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'white' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-100">
            <div 
              className="text-xl font-bold"
              style={{ color: BRAND.blue }}
            >
              Menu
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        active 
                          ? 'bg-gradient-to-r from-blue-50 to-pink-50' 
                          : 'hover:bg-slate-50'
                      }`}
                      style={{
                        color: active ? BRAND.blue : BRAND.blue,
                        fontWeight: active ? '700' : '500',
                      }}
                    >
                      <span className="flex-1">{l.label}</span>
                      {active && (
                        <span 
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: BRAND.pink }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Donate Button */}
          <div className="p-4 border-t border-slate-100">
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.blue})`,
                color: 'white'
              }}
            >
              Donate / Sponsor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}