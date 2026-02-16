import Image from "next/image";
import Link from "next/link";
import Newslater from "./NewslaterBanner";

import { Poppins } from 'next/font/google';
import ServicesPage from "../services/page";
import NewslaterBanner from "./NewslaterBanner";
import BlogCard from "./BlogCard";
import BlogGrid from "./BlogGrid";

const poppins = Poppins({ weight: ['400','700'], subsets: ['latin'] });

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* ================= HERO ================= */}
      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Evidence-based solutions for a sustainable future
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We work with partners around the world to tackle climate change,
            inequality, and environmental degradation through research,
            policy, and practice.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/services" className="btn btn-primary">
              Learn more
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <BlogGrid/>

      <NewslaterBanner/>

      {/* ================= SERVICES ================= */}
      
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What we do
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Research",
                text: "High-quality research that informs policy and practice.",
              },
              {
                title: "Policy support",
                text: "Working with governments and institutions to drive change.",
              },
              {
                title: "Capacity building",
                text: "Strengthening local and global capabilities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <ServicesPage/>
      <section className="bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold">
            Work with us to create lasting impact
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Discover opportunities to collaborate, contribute, and make a
            difference.
          </p>
          <Link href="/contact" className="btn btn-outline mt-6 text-white border-white hover:bg-white hover:text-cyan-600">
            Get in touch
          </Link>
        </div>
      </section>

    </main>
  );
}
