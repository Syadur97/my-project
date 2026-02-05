import blogs from "@/data/blogs.json";
import Link from "next/link";

// Pagination config
const BLOGS_PER_PAGE = 3;
const MAX_VISIBLE_PAGES = 5;

interface BlogPageProps {
  searchParams?: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params?.page || "1"));

  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  // Pagination window
  const startPage = Math.max(
    1,
    currentPage - Math.floor(MAX_VISIBLE_PAGES / 2)
  );
  const endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);

  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Lets Explore the World</h1>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {currentBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="block card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold mb-1">{blog.title}</h2>

              {/* Author */}
              {blog.user && (
                <div className="flex items-center mb-2">
                  {blog.user.avatar && (
                    <img
                      src={blog.user.avatar}
                      alt={blog.user.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                  )}
                  <span className="text-gray-600 text-sm">{blog.user.name}</span>
                </div>
              )}

              <p className="text-gray-700">{blog.body.substring(0, 120)}...</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 gap-2">
        {/* Prev */}
        <Link
          href={`/blog?page=${Math.max(1, currentPage - 1)}`}
          className={`btn btn-sm ${currentPage === 1 ? "btn-disabled" : "btn-outline"}`}
        >
          ←
        </Link>

        {/* Page Numbers */}
        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(
          (page) => (
            <Link
              key={page}
              href={`/blog?page=${page}`}
              className={`btn btn-sm ${currentPage === page ? "btn-primary" : "btn-outline"}`}
            >
              {page}
            </Link>
          )
        )}

        {/* Next */}
        <Link
          href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
          className={`btn btn-sm ${currentPage === totalPages ? "btn-disabled" : "btn-outline"}`}
        >
          →
        </Link>
      </div>
    </main>
  );
}
