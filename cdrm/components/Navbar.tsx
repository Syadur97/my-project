"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { logOut } from "@/lib/auth";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return null; // prevent flicker

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* ===== TOP NAVBAR ===== */}
      <div className="flex items-center justify-between px-4 lg:px-30 h-16">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold tracking-tight">iied</span>
            <span className="hidden sm:block text-sm leading-tight text-gray-700">
              International Institute
              <br />
              for Environment and Development
            </span>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/blog" className="hover:underline">
            News and insight
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* BEFORE LOGIN */}
          {!user && (
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}

          {/* AFTER LOGIN */}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.email || "User"
                      )}`
                    }
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="px-2 py-1 text-xs text-gray-500">
                  {user.email}
                </li>

                <li>
                  <Link href="/profile">Profile</Link>
                </li>

                <li>
                  <Link href="/settings">Settings</Link>
                </li>

                <li>
                  <button
                    onClick={async () => {
                      await logOut();
                      window.location.href = "/login";
                    }}
                    className="text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
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
