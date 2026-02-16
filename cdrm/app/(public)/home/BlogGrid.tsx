import BlogCard from "./BlogCard";

const blogs = [
  {
    id: 1,
    title: "Interview: embedding gender in the multilateral climate funds",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    category: "Interview",
    date: "12 February 2026",
  },
  {
    id: 2,
    title: "US to repeal climate 'endangerment finding'",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "News",
    date: "12 February 2026",
  },
  {
    id: 3,
    title: "Challenging coloniality and racial injustice in finance for nature",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    category: "Insight",
    date: "11 February 2026",
  },
  {
    id: 4,
    title: "Living heritage approach leads to owner-driven reconstruction in Gujarat",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    category: "Insight",
    date: "10 February 2026",
  },
  {
    id: 5,
    title: "Critical minerals, trade rules and industrial strategies: who benefits?",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    category: "Briefing",
    date: "10 February 2026",
  },
  {
    id: 6,
    title: "Networks, not global forums, to drive climate action",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    category: "Podcast",
    date: "9 February 2026",
  },
];

export default function BlogGrid() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}
