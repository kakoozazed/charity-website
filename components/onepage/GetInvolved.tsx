// components/onepage/GetInvolved.tsx
"use client";

import { useState } from 'react';
import { BRAND } from "@/styles/brand";

const involvementOptions = [
  {
    id: 'donate',
    title: 'Donate',
    description: 'Your financial support provides education, healthcare, and hope for vulnerable children.',
    icon: '❤️',
    impact: '$50 provides school supplies for a year',
    cta: 'Make a Donation',
    color: BRAND.pink,
    gradient: `linear-gradient(135deg, ${BRAND.pink}20, ${BRAND.yellow}10)`
  },
  {
    id: 'sponsor',
    title: 'Sponsor a Child',
    description: 'Build a personal connection through monthly sponsorship. Follow your child\'s journey.',
    icon: '👧',
    impact: '$35/month changes one life forever',
    cta: 'Start Sponsoring',
    color: BRAND.blue,
    gradient: `linear-gradient(135deg, ${BRAND.blue}20, ${BRAND.pink}10)`
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'Share your skills locally or abroad. Mentoring, teaching, healthcare, and more.',
    icon: '🤝',
    impact: '200+ volunteers trained last year',
    cta: 'Join Our Team',
    color: BRAND.yellow,
    textColor: BRAND.blue,
    gradient: `linear-gradient(135deg, ${BRAND.yellow}30, ${BRAND.blue}10)`
  },
  {
    id: 'partner',
    title: 'Partner',
    description: 'Churches, schools, and organizations—partner with us for greater impact.',
    icon: '🏛️',
    impact: '25+ active community partners',
    cta: 'Become a Partner',
    color: BRAND.blue,
    gradient: `linear-gradient(135deg, ${BRAND.blue}20, ${BRAND.yellow}10)`
  }
];

const fundraisingGoals = [
  { goal: 'School Fees', current: 78, target: 50, unit: 'children' },
  { goal: 'Nutrition Program', current: 65, target: 100, unit: 'meals/day' },
  { goal: 'Medical Checkups', current: 92, target: 75, unit: 'children' },
];

export default function GetInvolved() {
  const [selectedOption, setSelectedOption] = useState('donate');

  return (
    <section id="get-involved" className="relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div 
        className="absolute inset-0 bg-dot-pattern opacity-30" 
        style={{ backgroundImage: `radial-gradient(${BRAND.blue}20 1px, transparent 1px)` }} 
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-8">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div 
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-wider mb-4"
              style={{ 
                background: `linear-gradient(135deg, ${BRAND.blue}10, ${BRAND.pink}10)`,
                color: BRAND.blue 
              }}
            >
              Join the Movement
            </div>
            
            <h2 className="font-display text-3xl font-bold text-slate-900 lg:text-4xl">
              <span className="block">Every Hand Helps,</span>
              <span className="block mt-2" style={{ color: BRAND.pink }}>
                Every Heart Matters
              </span>
            </h2>
            
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Whether you have time, resources, or influence—you can be part of transforming a child's future.
            </p>

            {/* Live Impact Counter */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-pink-50 p-6 border border-white/60">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full" style={{ backgroundColor: `${BRAND.pink}30` }} />
                  <div 
                    className="relative flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.pink})`
                    }}
                  >
                    <span className="text-xl">🎯</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">2024 Impact Goal</div>
                  <div className="text-2xl font-bold text-slate-900">1,000 Children</div>
                  <div className="text-sm text-slate-600">586 sponsored • 58% complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Impact Stats */}
          <div className="grid grid-cols-2 gap-4">
            {fundraisingGoals.map((item) => (
              <div key={item.goal} className="rounded-xl bg-white p-5 shadow-soft border border-slate-100">
                <div className="text-sm font-medium text-slate-500">{item.goal}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-900">{item.current}</span>
                  <span className="text-xs text-slate-500">/ {item.target} {item.unit}</span>
                </div>
                <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
                  <div 
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(item.current / item.target) * 100}%`,
                      background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.pink})`
                    }}
                  />
                </div>
                <div className="mt-2 text-xs font-medium text-right">
                  <span style={{ color: BRAND.pink }}>
                    {Math.min(100, Math.round((item.current / item.target) * 100))}% funded
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Involvement Cards */}
        <div className="mt-20">
          <div className="grid gap-6 lg:grid-cols-4">
            {involvementOptions.map((option) => (
              <div
                key={option.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                  selectedOption === option.id ? 'ring-2 shadow-xl' : 'hover:shadow-lg'
                }`}
                style={{ 
                  background: option.gradient,
                  '--tw-ring-color': option.color,
                } as React.CSSProperties}
                onMouseEnter={() => setSelectedOption(option.id)}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div 
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ 
                      background: `linear-gradient(135deg, ${option.color}20, white)`,
                      color: option.color
                    }}
                  >
                    {option.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{option.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="mb-4 rounded-lg bg-white/60 p-2 backdrop-blur-sm">
                    <div className="text-xs font-medium text-slate-500">Your impact</div>
                    <div className="text-sm font-bold" style={{ color: option.color }}>
                      {option.impact}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`#${option.id === 'donate' ? 'donate' : 'contact'}`}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                    style={{ color: option.textColor || option.color }}
                  >
                    <span>{option.cta}</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Animated Border */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full"
                  style={{ 
                    background: `linear-gradient(90deg, ${option.color}, ${BRAND.yellow})`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter/Become a Monthly Donor */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 via-pink-500/5 to-yellow-400/5 blur-2xl" />
          
          <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div 
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold mb-4"
                  style={{ backgroundColor: `${BRAND.pink}10`, color: BRAND.pink }}
                >
                  🌟 Monthly Giving Circle
                </div>
                <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">
                  Join The Hope Keepers
                </h3>
                <p className="mt-2 text-slate-600">
                  Become a monthly donor and provide consistent, life-changing support to children year-round.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Monthly impact reports',
                    'Child sponsorship updates',
                    'Annual community visit opportunities',
                    'Tax benefits in your country'
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" style={{ color: BRAND.pink }} />
                      </svg>
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#donate"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${BRAND.blue}, ${BRAND.pink})`,
                    color: 'white'
                  }}
                >
                  Become a Hope Keeper
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-pink-50 p-6">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎁</div>
                    <div className="text-sm font-medium text-slate-500">Your monthly gift of</div>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold" style={{ color: BRAND.blue }}>$35</span>
                      <span className="text-sm text-slate-500">/month</span>
                    </div>
                    <p className="mt-4 text-sm text-slate-600">
                      Provides a child with education, nutrition, and healthcare for an entire year
                    </p>
                    <div className="mt-6 h-2 w-full rounded-full bg-white">
                      <div 
                        className="h-2 rounded-full"
                        style={{ 
                          width: '65%',
                          background: `linear-gradient(90deg, ${BRAND.blue}, ${BRAND.pink})`
                        }}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>245 Hope Keepers</span>
                      <span>Goal: 500</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Element */}
                <div 
                  className="absolute -bottom-4 -right-4 h-16 w-16 animate-float rounded-full"
                  style={{ background: `radial-gradient(circle, ${BRAND.yellow}30, transparent)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}