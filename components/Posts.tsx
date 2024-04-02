'use client';

import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  )

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    loading
      ? <h3>Loading...</h3>
      : (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )
  )
}

export { Posts };
