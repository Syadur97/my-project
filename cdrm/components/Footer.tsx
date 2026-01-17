// app/components/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">

      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-10">

        {/* Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

          <div>
            <h4 className="font-medium mb-3">News and insight</h4>
            <ul className="space-y-2">
              <li><Link href="#">Insights</Link></li>
              <li><Link href="#">News</Link></li>
              <li><Link href="#">Events</Link></li>
              <li><Link href="#">In conversation</Link></li>
              <li><Link href="#">Podcasts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Our approach</h4>
            <ul className="space-y-2">
              <li><Link href="#">Manifesto</Link></li>
              <li><Link href="#">Partnerships</Link></li>
              <li><Link href="#">Process</Link></li>
              <li><Link href="#">Impact</Link></li>
              <li><Link href="#">Hidden handbrakes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Publications</h4>
            <ul className="space-y-2">
              <li><Link href="#">About publications</Link></li>
              <li><Link href="#">Accessibility</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Media centre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">About</h4>
            <ul className="space-y-2">
              <li><Link href="#">Contact us</Link></li>
              <li><Link href="#">People</Link></li>
              <li><Link href="#">Accountability</Link></li>
              <li><Link href="#">Jobs and internships</Link></li>
              <li><Link href="#">IIED Europe</Link></li>
            </ul>
          </div>
        </div>

        {/* Social + Newsletter */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-4">
            <a className="w-9 h-9 rounded-full border flex items-center justify-center">in</a>
            <a className="w-9 h-9 rounded-full border flex items-center justify-center">f</a>
            <a className="w-9 h-9 rounded-full border flex items-center justify-center">◎</a>
            <a className="w-9 h-9 rounded-full border flex items-center justify-center">▶</a>

            <button className="ml-4 rounded-full border px-5 py-2 text-sm hover:bg-gray-100">
              Subscribe to newsletters
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm hover:underline"
          >
            back to top ↑
          </button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 py-6 flex flex-col md:flex-row md:justify-between gap-4 text-sm">
          <p>© 2026 International Institute for Environment and Development (IIED)</p>

          <div className="flex flex-wrap gap-4">
            <Link href="#">Accessibility</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms and conditions</Link>
            <Link href="#">Cookie preferences</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
