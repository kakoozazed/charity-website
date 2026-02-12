// app/not-found.tsx
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { BRAND } from "@/styles/brand";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "404 - Page Not Found | Charity for Children's Ministry",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold" style={{ color: BRAND.blue }}>404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Page Not Found</h2>
        <p className="mt-2 text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: BRAND.pink }}
        >
          <span>Return Home</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h2m-2 0a9 9 0 0118 0m-18 0h2m14 0h2M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}