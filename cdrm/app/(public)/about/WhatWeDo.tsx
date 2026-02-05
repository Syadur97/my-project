import Image from "next/image";
import whatWeDo from "@/data/whatWeDo.json";

export default function WhatWeDo() {
  return (
    <section className="bg-base-200 py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What we do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {whatWeDo.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <figure className="p-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={96}
                  height={96}
                  className="mx-auto"
                />
              </figure>

              <div className="card-body text-center">
                <h3 className="card-title justify-center">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
