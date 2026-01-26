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
      <p className="text-gray-500 mb-6">By User {blog.userId}</p>
      <p className="text-gray-700 whitespace-pre-line">{blog.body}</p>
      <Link href="/blog" className="btn btn-outline mt-6">
        Back to Blog
      </Link>
    </main>
  );
}
