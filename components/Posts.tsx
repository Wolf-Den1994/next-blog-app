'use client';

// import { getAllPosts } from "@/services/getPosts";
import { usePosts } from "@/store";
import Link from "next/link";
// import useSWR from "swr";
import type { Post } from "@/types/post"
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Posts = () => {
  // const { data: posts, isLoading } = useSWR('posts', getAllPosts);

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
