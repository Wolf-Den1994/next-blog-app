import { getAllPosts, getData } from "@/services/jsonplaceholder"
import { Metadata } from "next"

type Props = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.id.toString(),
  }))
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