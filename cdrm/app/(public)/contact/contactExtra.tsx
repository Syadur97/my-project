import Link from "next/link";

export default function ContactExtra() {
  return (
    <section className="bg-base-100 pt-16 pb-24">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Connect with us */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <span className="font-semibold">Connect with us</span>

          <div className="flex gap-3">
            <a className="btn btn-circle btn-outline btn-sm" href="#">in</a>
            <a className="btn btn-circle btn-outline btn-sm" href="#">f</a>
            <a className="btn btn-circle btn-outline btn-sm" href="#">ig</a>
            <a className="btn btn-circle btn-outline btn-sm" href="#">▶</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300 mb-16"></div>

        {/* Complaints & Data protection */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Complaints */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Complaints
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              IIED strives to work to the highest ethical standards, and is
              concerned to protect the rights, dignity, health, safety and
              privacy of those with whom we work. However, there may be times
              when we don’t meet our own standards or your expectations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              If you wish to make a complaint about any aspect of IIED’s work,
              please visit our{" "}
              <Link href="#" className="link link-primary">
                complaints page
              </Link>{" "}
              for further information.
            </p>
          </div>

          {/* Data protection */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Data protection
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to letting you know{" "}
              <Link href="#" className="link link-primary">
                what data we collect, why we collect it, and what we do with it
              </Link>
              .
            </p>

            <p className="text-gray-700 leading-relaxed">
              If you have any questions about how we use your personal
              information or comply with data protection legislation, please
              email{" "}
              <a
                href="mailto:data-protection@iied.org"
                className="link link-primary"
              >
                data-protection@iied.org
              </a>
              .
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
