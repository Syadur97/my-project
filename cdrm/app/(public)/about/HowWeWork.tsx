import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="bg-base-100 py-20">
      <div className=" mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Visual */}
        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co.com/NdgPbwJc/howwework.png"
            alt="How we work diagram"
            width={520}
            height={520}
            className="w-full max-w-md"
            priority
          />
        </div>

        {/* RIGHT: Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            How we work
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Alongside over <strong>350 partners in more than 60 countries</strong>,
            we generate evidence and build capacity in order to drive change
            in policy and practice.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Find out how we work and are achieving impact across local,
            national and international scales.
          </p>

          <Link
            href="/about/approach"
            className="inline-flex items-center gap-3 text-primary font-semibold hover:gap-4 transition-all"
          >
            Find out more about our approach
            <span className="btn btn-circle btn-outline btn-sm">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
