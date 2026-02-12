// components/onepage/Hero.tsx
"use client";

import { site } from "@/data/site";
import { BRAND } from "@/styles/brand";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Children in Kasese, Uganda"
          fill
          className={`object-cover transition-all duration-1000 scale-105 ${
            bgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          priority
          onLoadingComplete={() => setBgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B4B]/95 via-[#2E2A7A]/85 to-[#302E99]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span 
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm border"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'rgba(254, 240, 9, 0.3)',
                color: BRAND.yellow
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Faith-based • Child-centered • Community-driven
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">{site.tagline.split('in')[0]}in</span>
            <span 
              className="block mt-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% auto' }}
            >
              {site.tagline.split('in')[1]}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
            {site.about}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#donate"
              className="group relative overflow-hidden rounded-2xl px-8 py-4 text-base font-bold shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                background: BRAND.gradients.yellowPink,
                color: 'white'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Support a Child
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>

            <a
              href="#contact"
              className="group rounded-2xl px-8 py-4 text-base font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 border-2"
              style={{ 
                borderColor: 'rgba(254, 240, 9, 0.5)',
                color: 'white'
              }}
            >
              <span className="flex items-center gap-2">
                Talk to Us
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs uppercase tracking-wider">Discover</span>
          <div className="w-[2px] h-10 bg-gradient-to-b from-yellow-400 to-pink-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}