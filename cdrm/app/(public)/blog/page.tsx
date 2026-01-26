import blogs from "@/data/blogs.json";
import Link from "next/link";

// Pagination config
const BLOGS_PER_PAGE = 3;

interface BlogPageProps {
  searchParams?: { page?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams?.page || "1");
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <p className="text-gray-700 mb-2">{blog.body.substring(0, 100)}...</p>
              <div className="card-actions">
                <Link href={`/blog/${blog.id}`} className="btn btn-outline btn-sm">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            key={i + 1}
            href={`/blog?page=${i + 1}`}
            className={`btn btn-sm ${currentPage === i + 1 ? "btn-primary" : "btn-outline"}`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </main>
  );
}
