"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: number;
  title: string;
  image: string;
  category: string;
  date: string;
}

export default function BlogCard({
  id,
  title,
  image,
  category,
  date,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-base-200">
        
        {/* Image Section */}
        <figure className="relative h-52 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 badge badge-info text-white">
            {category}
          </div>
        </figure>

        {/* Content */}
        <div className="card-body p-5">
          <h2 className="card-title text-base font-semibold leading-snug line-clamp-2">
            {title}
          </h2>

          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
}
