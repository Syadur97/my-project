import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our consultancy, expertise, and mission.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We provide data-driven consultancy solutions focused on technology,
          analytics, and evidence-based decision making.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Our Mission</h2>
            <p>
              Our mission is to help organizations transform complex data into
              actionable insights using modern web technologies, cloud services,
              and robust analytics frameworks.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title">Our Vision</h2>
            <p>
              We envision a future where decision-making is transparent,
              efficient, and driven by reliable data systems accessible to all
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Web application development using Next.js and modern UI systems</li>
          <li>Authentication and authorization with Firebase</li>
          <li>Secure API and data management with MongoDB</li>
          <li>Analytics dashboards and reporting solutions</li>
          <li>Technical advisory and system architecture design</li>
        </ul>
      </section>

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
