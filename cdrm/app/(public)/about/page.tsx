import type { Metadata } from "next";
import Hero from "./Hero";
import Values from "./Values";
import JobsBanner from "./JobsBanner";
import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our consultancy, expertise, and mission.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto py-12 max-w-5xl">
      <Hero/>
      <JobsBanner/>
      <Values/>
      <WhatWeDo/>
      <WhoWeAre/>
      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-3">Work With Us</h2>
        <p className="mb-6 text-gray-600">
          Interested in collaborating or learning more about our services?
        </p>
        <a href="/contact" className="btn btn-primary">
          Contact Us
        </a>
      </section>
    </main>
  );
}
