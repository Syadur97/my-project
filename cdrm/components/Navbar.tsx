// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      {/* ===== TOP NAVBAR ===== */}
      <div className="flex items-center justify-between px-4 lg:px-30 h-16">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            iied
          </span>
          <span className="hidden sm:block text-sm leading-tight text-gray-700">
            International Institute<br />for Environment and Development
          </span>
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/map" className="hover:underline">Services</Link>
          <Link href="/news" className="hover:underline">News and insight</Link>
          <Link href="/approach" className="hover:underline">Our approach</Link>
          <Link href="/publications" className="hover:underline">Publications</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search">
            🔍
          </button>
          <button className="lg:hidden" aria-label="Menu">
            ☰
          </button>
        </div>
      </div>

      {/* ===== SECOND ROW: SCROLLABLE TOPICS ===== */}
      <div className="relative border-t bg-gray-50">
        <div className="flex items-center gap-2 px-4 lg:px-8 overflow-x-auto scrollbar-hide h-14">

          {[
            "Food and agriculture",
            "Sustainable markets",
            "Policy and planning",
            "Forests",
            "Governance",
            "Communication",
            "Economics",
            "Poverty",
            "Monitoring",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="whitespace-nowrap rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

    </header>
  );
}
