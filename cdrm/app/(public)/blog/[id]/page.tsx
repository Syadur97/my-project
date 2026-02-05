import blogs from "@/data/blogs.json";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function BlogDetailPage(props: BlogDetailProps) {
  const resolvedParams = await props.params;
  const blogId = resolvedParams.id;

  const blog = blogs.find((b) => b.id === parseInt(blogId));
  if (!blog) return notFound();

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Author Section */}
      {blog.user && (
        <div className="flex items-center mb-6">
          {blog.user.avatar && (
            <img
              src={blog.user.avatar}
              alt={blog.user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <span className="text-gray-600 text-lg">By {blog.user.name}</span>
        </div>
      )}

      <p className="text-gray-700 whitespace-pre-line">{blog.body}</p>

      <Link href="/blog" className="btn btn-outline mt-6">
        Back to Blog
      </Link>
    </main>
  );
}
