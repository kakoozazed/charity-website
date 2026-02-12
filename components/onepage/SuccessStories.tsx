"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/styles/brand";

const stories = [
  {
    id: 1,
    name: "Community Outreach Team",
    age: null,
    program: "Essential Needs & Education Support",
    quote:
      "We're committed to ensuring every child has the essentials needed to learn, grow, and thrive.",
    impact:
      "Provided clothing, shoes, and learning materials to support children’s well‑being and school success",
    image:
      "https://i.pinimg.com/736x/b6/49/74/b64974ea4fc3d8080819ff826fceb4d0.jpg",
  },
  {
    id: 2,
    name: "Community Support Beneficiary",
    age: 9,
    program: "Family Care & Child Support",
    quote: "The support our family received made a real difference.",
    impact: "Improved child well‑being and strengthened family stability",
    image:
      "https://i.pinimg.com/736x/e8/e6/df/e8e6df1f01c8032427c6e6ef3f4d2946.jpg",
  },
  {
    id: 3,
    name: "Learning Support Initiative",
    age: null,
    program: "Education Materials Distribution",
    quote:
      "Every child deserves the tools to learn. A simple book or pen can ignite a big dream.",
    impact:
      "Improved access to learning materials and strengthened children’s academic confidence",
    image: "https://i.pinimg.com/736x/52/54/21/52542168497a653e8473fa67a346f9c6.jpg",
  },
  {
    id: 4,
    name: "Nutrition Support Program",
    age: null,
    program: "Food & Wellness Outreach",
    quote:
      "A healthy meal gives every child the strength to learn, play, and hope.",
    impact:
      "Delivered nutritious meals that improved children’s health and daily school participation",
    image:
      "https://i.pinimg.com/736x/7b/fa/83/7bfa8342eed9337b66c63fa081d1b9e8.jpg",
  },
  {
    id: 5,
    name: "Menstrual Health Initiative",
    age: null,
    program: "Girls' Hygiene & Dignity Support",
    quote: "Access to pads helps girls stay in school with confidence and dignity.",
    impact: "Improved menstrual hygiene, boosted school attendance, and empowered young girls",
    image: "https://i.pinimg.com/736x/36/35/42/3635426b0c6eb7545a6f466945f369aa.jpg"
  },
  {
    id: 6,
    name: "Youth Skills Training Program",
    age: null,
    program: "Children’s Vocational & Creativity Development",
    quote: "Learning new skills like baking helps us grow confident and dream bigger.",
    impact: "Introduced practical baking skills that inspire creativity, teamwork, and self‑reliance in children",
    image: "https://i.pinimg.com/736x/88/f6/5d/88f65d6e6301b111b33435e3327bf404.jpg"
  }
];

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-wider mb-4"
            style={{
              background: `linear-gradient(135deg, ${BRAND.pink}15, ${BRAND.blue}15)`,
              color: BRAND.blue,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: BRAND.pink }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND.pink }}
              />
            </span>
            Real Stories • Real Impact
          </div>

          <h2 className="font-display text-3xl font-bold text-slate-900 lg:text-4xl">
            <span className="block">Transforming Lives,</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              One Child at a Time
            </span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Meet the children whose lives have been changed through your support
            and generosity.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="group relative"
              onMouseEnter={() => setActiveStory(index)}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:shadow-hard hover:scale-[1.02]">
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

                  {/* Program Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className="rounded-full px-3 py-1.5 text-xs font-bold shadow-lg backdrop-blur-sm"
                      style={{
                        backgroundColor: `${BRAND.yellow}CC`,
                        color: BRAND.blue,
                      }}
                    >
                      {story.program}
                    </span>
                  </div>

                  {/* Age Badge */}
                  {story.age !== null && (
                    <div className="absolute top-4 right-4 z-20">
                      <span
                        className="rounded-full px-3 py-1.5 text-xs font-bold shadow-lg backdrop-blur-sm"
                        style={{
                          backgroundColor: `${BRAND.blue}CC`,
                          color: "white",
                        }}
                      >
                        Age {story.age}
                      </span>
                    </div>
                  )}

                  {/* Quote Hover */}
                  <div className="absolute inset-0 z-20 flex items-end p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-white text-sm italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">
                      {story.name}
                    </h3>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          style={{
                            color:
                              i < 4 ? BRAND.yellow : BRAND.yellow + "40",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">{story.impact}</p>

                  {/* Continue Button */}
                  <a
                    href="#donate"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                    style={{
                      backgroundColor: `${BRAND.blue}08`,
                      color: BRAND.blue,
                    }}
                  >
                    <span>Sponsor {story.name}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft">
            <span className="text-sm text-slate-600">
              Want to make a difference?
            </span>
            <a
              href="#donate"
              className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${BRAND.pink}, ${BRAND.blue})`,
                color: "white",
              }}
            >
              <span className="relative z-10">Sponsor a Child Today</span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}