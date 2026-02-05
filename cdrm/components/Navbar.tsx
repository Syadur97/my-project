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

  if (loading) return null;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="navbar px-4 lg:px-10 h-16">

        {/* ===== LEFT ===== */}
        <div className="navbar-start">

          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 rounded-box shadow z-[50]"
            >
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">News and insight</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">iied</span>
            <span className="hidden sm:block text-sm leading-tight text-gray-700">
              International Institute
              <br />
              for Environment and Development
            </span>
          </Link>
        </div>

        {/* ===== CENTER (DESKTOP NAV) ===== */}
        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-8 text-base font-medium">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/blog" className="hover:underline">News and insight</Link>
          </nav>
        </div>

        {/* ===== RIGHT ===== */}
        <div className="navbar-end flex items-center gap-4">

          {!user && (
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}

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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
              >
                <li className="px-2 py-1 text-xs text-gray-500">
                  {user.email}
                </li>

                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/settings">Settings</Link></li>

                <li>
                  <button
                    onClick={async () => {
                      await logOut();
                      window.location.href = "/";
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
    </header>
  );
}
