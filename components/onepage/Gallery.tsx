// components/onepage/Programs.tsx
"use client";

import { useState } from 'react';
import { site } from "@/data/site";
import { BRAND } from "@/styles/brand";
import Image from 'next/image';

// Program-specific icons and extended data
const programDetails = [
  {
    icon: "📚",
    benefits: ["Daily nutritious meals", "School supplies", "Tutoring support"],
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-50 to-cyan-50"
  },
  {
    icon: "🏥",
    benefits: ["Regular checkups", "Emergency care", "Health education"],
    color: "from-pink-500 to-rose-500",
    gradient: "bg-gradient-to-br from-pink-50 to-rose-50"
  },
  {
    icon: "🛡️",
    benefits: ["Safe spaces", "Counseling", "Protection programs"],
    color: "from-yellow-500 to-orange-500",
    gradient: "bg-gradient-to-br from-yellow-50 to-orange-50"
  },
  {
    icon: "🤝",
    benefits: ["Skills training", "Community events", "Mentorship"],
    color: "from-purple-500 to-indigo-500",
    gradient: "bg-gradient-to-br from-purple-50 to-indigo-50"
  }
];

// 🖼️ NEW: Program showcase images (download and place in /public/programs/)
const programShowcase = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/8e/b2/7d/8eb27d5ec2b0613479fe762a75fc35d0.jpg",
    alt: "Youth and parents learning cake decoration and bakery skills",
    title: "Vocational Skills Training",
    description: "Hands-on training in baking, tailoring, and small business management.",
    category: "Livelihoods",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/36/01/08/36010841b6b9592a7a92b1834b3b9e84.jpg",
    alt: "Students attending career guidance conference and mentorship",
    title: "Career Counselling Conference",
    description: "Connecting youth with professionals and career pathways.",
    category: "Mentorship",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/fd/b1/04/fdb104e6fac5407f3ab9a00814345448.jpg",
    alt: "Children receiving school supplies and hygiene kits with dignity",
    title: "Material Support Program",
    description: "School fees, uniforms, books, and essential supplies.",
    category: "Education",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/11/42/c4/1142c4ebc71606649250450afce7742a.jpg",
    alt: "Mothers supported with baby care items and early childhood training",
    title: "Maternal & Child Care",
    description: "Baby kits, parenting education, and health screenings.",
    category: "Family Support",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/25/6d/df/256ddfe517c5225b30f4d35e9ffe5c0b.jpg",
    alt: "Children receiving school supplies and hygiene kits with dignity",
    title: "Material Support Program",
    description: "School fees, uniforms, books, and essential supplies.",
    category: "Education",
    color: "from-green-500 to-emerald-500"
  },
   {
    id: 6,
    src: "https://i.pinimg.com/736x/c8/97/67/c8976763cca0a1da9bf3749782d91e69.jpg",
    alt: "Children receiving school supplies and hygiene kits with dignity",
    title: "Material Support Program",
    description: "School fees, uniforms, books, and essential supplies.",
    category: "Education",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/74/14/cd/7414cd6585f739d3a17dc145cc187ceb.jpg",
    alt: "Students attending career guidance conference and mentorship",
    title: "Career Counselling Conference",
    description: "Connecting youth with professionals and career pathways.",
    category: "Mentorship",
    color: "from-blue-500 to-indigo-500"
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/71/72/0d/71720db9af6e10b68e29e93f4908ac59.jpg",
    alt: "Parents supported with baby care items and early childhood training",
    title: "Maternal & Child Care",
    description: "Food items, parenting education, and health screenings.",
    category: "Family Support",
    color: "from-pink-500 to-rose-500"
  },
];

export default function Programs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredShowcase, setHoveredShowcase] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      {/* Background remains the same */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(30deg, ${BRAND.blue} 12%, transparent 12.5%, transparent 87%, ${BRAND.blue} 87.5%, ${BRAND.blue}),
              linear-gradient(150deg, ${BRAND.blue} 12%, transparent 12.5%, transparent 87%, ${BRAND.blue} 87.5%, ${BRAND.blue}),
              linear-gradient(30deg, ${BRAND.pink} 12%, transparent 12.5%, transparent 87%, ${BRAND.pink} 87.5%, ${BRAND.pink}),
              linear-gradient(150deg, ${BRAND.pink} 12%, transparent 12.5%, transparent 87%, ${BRAND.pink} 87.5%, ${BRAND.pink})
            `,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
            opacity: 0.15
          }}
        />
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header (unchanged) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-gray-200/50 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ backgroundColor: BRAND.pink }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: BRAND.pink }} />
            </span>
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: BRAND.blue }}
            >
              Our Core Initiatives
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: BRAND.blue }}
          >
            Comprehensive{' '}
            <span
              className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
              style={{ backgroundImage: BRAND.gradients.yellowPink }}
            >
              Holistic
            </span>{' '}
            Development
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            We address every aspect of a child's wellbeing through carefully designed,
            evidence-based programs that create lasting impact.
          </p>
        </div>

        {/* 🆕 NEW: Program Image Showcase Grid - Your 4 Images Here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {programShowcase.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredShowcase(index)}
              onMouseLeave={() => setHoveredShowcase(null)}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                  <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold uppercase tracking-wider mb-2 self-start`}>
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/50 rounded-tr-xl z-30" />
              </div>
            </div>
          ))}
        </div>

        {/* Programs Grid (unchanged) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container - unchanged */}
              <div className={`
                relative h-full bg-white rounded-2xl p-6 
                transition-all duration-500 ease-out
                ${hoveredCard === index
                  ? 'shadow-2xl scale-[1.02] -translate-y-1'
                  : 'shadow-lg hover:shadow-xl'
                }
              `}>
                {/* ... (keep all existing card content exactly as is) ... */}

                {/* Animated Gradient Border */}
                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-500
                  bg-gradient-to-r ${programDetails[index].color}
                  ${hoveredCard === index ? 'opacity-15' : 'opacity-0'}
                `} />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-5 relative">
                    <div className={`
                      absolute inset-0 rounded-xl blur-lg transition-all duration-500
                      bg-gradient-to-r ${programDetails[index].color}
                      ${hoveredCard === index ? 'opacity-30 scale-150' : 'opacity-20'}
                    `} />
                    <div
                      className={`
                        relative w-14 h-14 rounded-xl flex items-center justify-center
                        bg-gradient-to-r ${programDetails[index].color}
                        transition-all duration-500
                        ${hoveredCard === index ? 'scale-110 rotate-3' : ''}
                      `}
                    >
                      <span className="text-2xl filter drop-shadow-lg">
                        {programDetails[index].icon}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-300"
                    style={{ color: hoveredCard === index ? BRAND.blue : '#1e293b' }}
                  >
                    {program.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.desc}
                  </p>

                  <div className={`
                    space-y-1.5 transition-all duration-500 overflow-hidden
                    ${hoveredCard === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}
                  `}>
                    {programDetails[index].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill={BRAND.blue} viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 group/link"
                    style={{ color: BRAND.pink }}
                  >
                    <span>Learn more</span>
                    <span className={`transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`}>→</span>
                  </a>
                </div>

                <div className={`
                  absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${programDetails[index].color}
                  rounded-b-2xl transition-all duration-700
                  ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics (unchanged) */}
        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black mb-1 bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Children Supported
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black mb-1 bg-gradient-to-br from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  15
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Partner Schools
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black mb-1 bg-gradient-to-br from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  8
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Communities
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black mb-1 bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  2010
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Founded
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section (unchanged) */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 rounded-full blur-xl opacity-30 animate-pulse" />

            <a
              href="#donate"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-white font-bold shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl group"
              style={{ background: BRAND.gradients.yellowPink }}
            >
              <span className="text-base lg:text-lg">Sponsor a Child's Journey</span>
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 transition-all duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>

              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            Monthly sponsorship starts at just $35 • 100% of donations go directly to programs
          </p>
        </div>
      </div>
    </section>
  );
}