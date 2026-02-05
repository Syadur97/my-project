import contactItems from "@/data/contactItems.json";
import Link from "next/link";
import ContactExtra from "./contactExtra";

export default function ContactPage() {
  return (
    <main className="bg-base-100 py-20">
      <div className="container mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <h1 className="text-4xl font-bold">Contact</h1>

          <div className="space-y-4 text-gray-700">
            <p>
              Working with others is vital to our work. To get in touch, email{" "}
              <a
                href="mailto:inforequest@iied.org"
                className="link link-primary"
              >
                inforequest@iied.org
              </a>{" "}
              and we’ll get back to you as soon as we can.
            </p>

            <p>
              You can also contact specific{" "}
              <Link href="#" className="link link-primary">
                IIED experts
              </Link>
              . We look forward to collaborating.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className="space-y-4"
            >
              <div className="mx-auto w-20 h-20 rounded-full border border-primary flex items-center justify-center text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <div className="text-sm text-gray-600">
                <a
                  href={`mailto:${item.email}`}
                  className="link link-primary block"
                >
                  {item.email}
                </a>
                <span>{item.phone}</span>
              </div>

              <p className="text-sm text-gray-700">
                {item.description}
              </p>

              {item.linkText && (
                <Link href="#" className="link link-primary text-sm">
                  {item.linkText}
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
      {/* Divider */}
        <div className="border-t border-base-300"></div>
        <ContactExtra/>
    </main>
  );
}
