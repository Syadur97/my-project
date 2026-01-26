// app/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">

      {/* ===== TOP NAVBAR ===== */}
      <div className="flex items-center justify-between px-4 lg:px-30 h-16">

        {/* Logo */}
        <Link href="/">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            iied
          </span>
          <span className="hidden sm:block text-sm leading-tight text-gray-700">
            International Institute<br />for Environment and Development
          </span>
        </div></Link>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/blog" className="hover:underline">News and insight</Link>
          
        </nav>

        {/* Icons */}
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
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
