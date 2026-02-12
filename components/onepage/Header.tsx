// components/onepage/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BRAND } from "@/styles/brand";

function NavLink({ href, label, onClick, isMobile = false }: { 
  href: string; 
  label: string; 
  onClick?: () => void;
  isMobile?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative font-medium transition-all duration-300 hover:text-white group
        ${isMobile 
          ? 'block w-full px-4 py-3 text-base text-white/90 hover:bg-white/10 rounded-lg' 
          : 'px-4 py-2 text-sm text-white/90 hover:text-white'
        }
      `}
    >
      {label}
      {!isMobile && (
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-white to-pink-200 transition-all duration-300 group-hover:left-0 group-hover:w-full" />
      )}
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on window resize (if screen becomes larger)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-700 ${
          scrolled 
            ? 'py-2 shadow-2xl backdrop-blur-lg bg-opacity-95' 
            : 'py-3 md:py-4'
        }`}
        style={{ 
          backgroundColor: scrolled 
            ? 'rgba(10, 8, 45, 0.95)' 
            : BRAND.blue,
        }}
      >
        {/* Gradient border bottom for premium look */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo - Responsive sizing */}
          <a 
            href="#home" 
            className="group flex items-center gap-2 sm:gap-3 lg:gap-4 transition-all duration-500 hover:opacity-90"
            onClick={handleNavClick}
          >
            <div className="relative">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {!logoError ? (
                  <Image
                    src="/icon-384.png"
                    alt="CCM Logo"
                    fill
                    className="object-cover"
                    onError={() => setLogoError(true)}
                    priority
                    sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 56px"
                  />
                ) : (
                  <div 
                    className="grid h-full w-full place-items-center rounded-xl font-bold"
                    style={{ 
                      background: BRAND.gradients.bluePink,
                    }}
                  >
                    <span className="text-lg sm:text-xl text-white">CCM</span>
                  </div>
                )}
              </div>
              
              {/* Premium decorative elements - hidden on very small screens */}
              <div className="absolute -right-2 -top-2 h-3 w-3 sm:h-4 sm:w-4 animate-pulse rounded-full bg-white/90 shadow-lg hidden xs:block" />
              <div className="absolute -bottom-1 -left-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-75 blur-sm hidden xs:block" />
            </div>
            
            {/* Logo Text - Responsive visibility */}
            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-white line-clamp-1">
                  <span className="hidden xs:inline">Charity for </span>
                  <span className="hidden xs:inline">Children's Ministry</span>
                  <span className="xs:hidden">CCM</span>
                </span>
                <span className="hidden sm:inline-block rounded-full bg-white/10 px-2 py-0.5 text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-white/90">
                  Uganda
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-white/70">
                <span className="hidden xs:inline">Kasese, Uganda</span>
                <span className="xs:hidden">Kasese</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>Est. 2010</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <NavLink href="#home" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#programs" label="Programs" />
            <NavLink href="#gallery" label="Gallery" />
            <NavLink href="#donate" label="Donate" />
            <NavLink href="#contact" label="Contact" />
          </nav>

          {/* Right side - Donate button + Mobile menu toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Donate Button - Responsive sizing */}
            <a
              href="#donate"
              className="group relative overflow-hidden rounded-full px-4 sm:px-5 lg:px-7 py-2 sm:py-2.5 lg:py-3.5 text-xs sm:text-sm font-bold tracking-wide shadow-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
              style={{ 
                background: BRAND.gradients.yellowPink,
                color: 'white',
              }}
            >
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                <span className="hidden xs:inline">Donate</span>
                <span className="xs:hidden">Give</span>
                <span className="hidden sm:inline">/ Sponsor</span>
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Premium shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
              </div>
            </a>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button 
              className="relative md:hidden w-10 h-10 rounded-lg p-2 text-white/80 hover:text-white focus:outline-none transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center justify-center gap-1.5">
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay - Glass morphism */}
        <div 
          className={`
            fixed inset-x-0 top-[57px] sm:top-[65px] md:hidden
            transition-all duration-500 ease-in-out
            ${mobileMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
            }
          `}
          style={{ 
            backgroundColor: scrolled 
              ? 'rgba(10, 8, 45, 0.98)' 
              : BRAND.blue,
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${BRAND.yellow}20`,
            maxHeight: 'calc(100vh - 57px)',
            overflowY: 'auto'
          }}
        >
          <nav className="container mx-auto px-4 py-6 sm:py-8 flex flex-col">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-1 mb-6">
              <NavLink href="#home" label="Home" onClick={handleNavClick} isMobile />
              <NavLink href="#about" label="About" onClick={handleNavClick} isMobile />
              <NavLink href="#programs" label="Programs" onClick={handleNavClick} isMobile />
              <NavLink href="#gallery" label="Gallery" onClick={handleNavClick} isMobile />
              <NavLink href="#donate" label="Donate" onClick={handleNavClick} isMobile />
              <NavLink href="#contact" label="Contact" onClick={handleNavClick} isMobile />
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-white/10 pt-6 mt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">+256 706 522 508</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm truncate">charityforchildrensminitry@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Kisanga B, Kasese, Uganda</span>
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <a
                href="#donate"
                onClick={handleNavClick}
                className="flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: BRAND.gradients.yellowPink }}
              >
                <span>Sponsor a Child Today</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}