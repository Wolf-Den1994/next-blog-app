import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next Blog",
};

export const revalidate = 10;

export default function Blog() {
  return <>
    <h1>Blog page</h1>
    <PostSearch />
    <Posts />
  </>
}