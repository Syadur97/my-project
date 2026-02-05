import Link from "next/link";

export default function JobsBanner() {
  return (
    // FULL-WIDTH BACKGROUND
    <div className="relative w-screen bg-cyan-500 overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:px-30 ">
      
      {/* Decorative circle */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-400 opacity-40 hidden sm:block" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          {/* Text block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <h2 className="text-2xl md:text-3xl font-serif text-black">
              Jobs
            </h2>
            <p className="text-black text-sm md:text-base max-w-3xl">
              We regularly look for new people to help us to make a difference in
              the world. Find out about opportunities to work with us
            </p>
          </div>

          {/* CTA Arrow */}
          <Link
            href="/jobs"
            className="self-start sm:self-center flex items-center justify-center w-10 h-10 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
            aria-label="View jobs"
          >
            →
          </Link>

        </div>
      </div>
    </div>
  );
}
