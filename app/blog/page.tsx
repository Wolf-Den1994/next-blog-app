'use client';

import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
// import type { Metadata } from "next";
import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// export const metadata: Metadata = {
//   title: "Blog | Next Blog",
// };

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then(setPosts).finally(() => setLoading(false))
  }, [])

  return <>
    <h1>Blog page</h1>
    <PostSearch onSearch={setPosts} />
    {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
  </>
}