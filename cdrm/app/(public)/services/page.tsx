"use client";

import { useState } from "react";
import services from "@/data/services.json";

type Service = {
  id: number;
  title: string;
  short: string;
  details: string[];
};

export default function ServicesPage() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer end-to-end technical consultancy services focused on building
          reliable, scalable, and secure digital systems.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {services.map((service: Service) => {
          const isActive = activeId === service.id;

          return (
            <div
              key={service.id}
              className={`card bg-base-100 shadow-md transition-all duration-300 ${
                isActive ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p className="text-gray-600">{service.short}</p>

                {isActive && (
                  <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700">
                    {service.details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="card-actions justify-between mt-6">
                  <button
                    className="btn btn-outline btn-primary"
                    onClick={() =>
                      setActiveId(isActive ? null : service.id)
                    }
                  >
                    {isActive ? "Hide Details" : "View Details"}
                  </button>

                  <a href="/contact" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
