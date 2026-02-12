"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: BRAND.blue }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo with icon */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <div className="relative">
            <Image
              src="/icon-384.png"
              alt="Charity for Children's Ministry"
              width={40}
              height={40}
              className="rounded-xl transition-all duration-300 group-hover:shadow-lg"
              priority
            />
            <div 
              className="absolute -inset-1 rounded-xl opacity-0 blur transition-all duration-300 group-hover:opacity-50"
              style={{ 
                background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.yellow})`,
              }}
            />
          </div>
          
          <div className="flex flex-col">
            <span 
              className="text-sm font-bold leading-tight"
              style={{ color: BRAND.yellow }}
            >
              CCM
            </span>
            <span className="text-xs text-white/80">
              Kasese, Uganda
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                style={{ 
                  color: active ? BRAND.yellow : 'white',
                }}
              >
                <span className="relative z-10">{l.label}</span>
                {active && (
                  <span 
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${BRAND.pink}30, ${BRAND.blue}50)`,
                    }}
                  />
                )}
                <span 
                  className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-pink-400 to-yellow-400 transition-all duration-300 group-hover:left-0 group-hover:w-full"
                  style={{ 
                    width: active ? '100%' : '0%',
                    left: active ? '0' : '50%',
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="rounded-lg p-2 md:hidden"
          style={{ color: 'white' }}
          aria-label="Menu"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>

        {/* Donate Button */}
        <Link
          href="/donate"
          className="group relative hidden overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 md:block"
          style={{ 
            background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.blue})`,
            color: 'white'
          }}
        >
          <span className="relative z-10">Donate / Sponsor</span>
          <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="hidden"> {/* Add mobile menu logic here */}
        {/* Mobile menu items */}
      </div>
    </header>
  );
}