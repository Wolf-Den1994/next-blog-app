import { Metadata } from "next"
import { Post } from "@/types/post";

async function getData(id: string): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60, // 1min
    }
  });
  return response.json();
}

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: `${post.id} ${post.title}`,
  }
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </>
}