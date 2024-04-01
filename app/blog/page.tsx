import type { Metadata } from "next";
import Link from "next/link";
import { Post } from "@/types/post";

async function getData(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60, // 1min
    }
  });

  if (!response.ok) {
    throw new Error('Unable to fetch!')
  }

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next Blog",
};

export default async function Blog() {
  const post = await getData();

  return <>
    <h1>Blog page</h1>
    <ul>
      {post.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </>
}