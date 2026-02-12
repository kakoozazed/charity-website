// components/onepage/About.tsx
"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { BRAND } from "@/styles/brand";

export default function About() {
  // Extract only what's needed for About section
  const { mission, vision, impact } = site;
  
  // Partnership data (local to About section)
  const partnershipFeatures = [
    "100% of donations go directly to programs",
    "Monthly impact reports with photos",
    "Visit programs anytime by appointment",
    "Direct communication with sponsored children"
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${BRAND.blue} 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ 
              backgroundColor: 'rgba(48,46,153,0.08)',
              color: BRAND.blue,
              letterSpacing: '2px'
            }}
          >
            Our Foundation
          </span>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: BRAND.blue }}
          >
            Why we exist
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {site.about}
          </p>
        </div>

        {/* Image & Mission/Vision Grid - Image Left, Cards Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-20">
          {/* Left Column - Hero Image with Logo */}
          <div className="relative h-[500px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            {/* Image with Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-pink-600/40 mix-blend-overlay z-20" />
            
            <Image
              src="https://i.pinimg.com/736x/53/75/fb/5375fb94d9320e4f2ef10f90ba23bae5.jpg"
              alt="Ugandan children and community support"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            
            {/* Content Overlay with Logo */}
            <div className="absolute inset-0 z-30 flex flex-col justify-between p-8 lg:p-10">
              {/* Top Bar with Logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30">
                    <Image
                      src="/icon-384.png"
                      alt="CCM Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-white font-bold text-lg lg:text-xl">
                      CCM
                    </span>
                    <span className="text-white/70 text-xs">
                      Since 2010
                    </span>
                  </div>
                </div>
                
                {/* Premium Badge */}
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                  Kasese, Uganda
                </span>
              </div>
              
              {/* Quote with Logo Integration */}
              <div>
                <blockquote className="text-white">
                  <p className="text-2xl lg:text-3xl font-bold leading-tight mb-6">
                    "Every child deserves a chance to thrive"
                  </p>
                  <footer className="flex items-center gap-4">
                    {/* Circular Logo Badge */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 shadow-xl">
                      <Image
                        src="/icon-384.png"
                        alt="Charity for Children's Ministry"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <cite className="text-white not-italic font-semibold text-base lg:text-lg block">
                        Charity for Children's Ministry
                      </cite>
                      <div className="flex items-center gap-2 text-white/70 text-sm">
                        <span>Making hope visible</span>
                        <span className="w-1 h-1 rounded-full bg-white/70" />
                        <span>Est. 2010</span>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            
            {/* Decorative Corner Accents */}
            <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-white/30 rounded-tr-3xl z-40" />
            <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-white/30 rounded-bl-3xl z-40" />
          </div>

          {/* Right Column - Mission & Vision Cards */}
          <div className="flex flex-col gap-6">
            {/* Mission Card */}
            <div className="group relative flex-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  {/* Logo in Mission Card */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ background: BRAND.gradients.bluePink }}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src="/icon-384.png"
                        alt="CCM Logo"
                        fill
                        className="object-cover brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Our Purpose
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: BRAND.blue }}
                    >
                      Mission
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-1">
                  {mission}
                </p>
                
                {/* Stats Preview with Logo Accent */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <Image
                          src="/icon-384.png"
                          alt=""
                          fill
                          className="object-cover opacity-50"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-500">Children supported</span>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: BRAND.pink }}>150+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative flex-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  {/* Logo in Vision Card */}
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ background: BRAND.gradients.yellowPink }}
                  >
                    <div className="relative w-8 h-8">
                      <Image
                        src="/icon-384.png"
                        alt="CCM Logo"
                        fill
                        className="object-cover brightness-0 invert"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      Our Aspiration
                    </div>
                    <h3 
                      className="text-2xl font-bold"
                      style={{ color: BRAND.blue }}
                    >
                      Vision
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-1">
                  {vision}
                </p>
                
                {/* Stats Preview with Logo Accent */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <Image
                          src="/icon-384.png"
                          alt=""
                          fill
                          className="object-cover opacity-50"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-500">Communities reached</span>
                    </div>
                    <span className="text-2xl font-bold" style={{ color: BRAND.yellow }}>8+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Partnership Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Impact Stats */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'rgba(231,5,139,0.1)' }}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src="/icon-384.png"
                    alt=""
                    fill
                    className="object-cover"
                    style={{ filter: 'brightness(0) saturate(100%) invert(21%) sepia(86%) saturate(7167%) hue-rotate(322deg) brightness(91%) contrast(106%)' }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold" style={{ color: BRAND.blue }}>
                Our Impact in Numbers
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {impact.map((x) => (
                <div key={x.label} className="text-center">
                  <div 
                    className="text-3xl md:text-4xl font-black mb-2"
                    style={{ color: BRAND.pink }}
                  >
                    {x.metric}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {x.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="relative w-4 h-4">
                  <Image
                    src="/icon-384.png"
                    alt=""
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <span>Serving since 2010 • 500+ children supported</span>
              </div>
            </div>
          </div>

          {/* Partnership Card */}
          <div 
            className="rounded-3xl p-8 shadow-xl text-white relative overflow-hidden"
            style={{ background: BRAND.gradients.bluePink }}
          >
            {/* Decorative Pattern with Logo Watermark */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            {/* Logo Watermark */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10">
              <Image
                src="/icon-384.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm mb-6">
                <div className="relative w-4 h-4">
                  <Image
                    src="/icon-384.png"
                    alt=""
                    fill
                    className="object-cover brightness-0 invert"
                  />
                </div>
                Partner With Us
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Create lasting change
              </h3>
              
              <p className="text-white/90 mb-6">
                Join hands with us to transform children's lives through education, healthcare, and hope.
              </p>

              <div className="space-y-3 mb-8">
                {partnershipFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ color: BRAND.blue }}
              >
                Become a Partner
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}