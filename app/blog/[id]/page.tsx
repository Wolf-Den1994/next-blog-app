import { getAllPosts, getData } from "@/services/jsonplaceholder"
import { Metadata } from "next"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import { redirect } from "next/navigation"

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

async function removePosts(id: string) {
  'use server';

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })

  revalidatePath('/blog');
  redirect('/blog')
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>

    <form action={removePosts.bind(null, id)}>
      <input type="submit" value="delete post" />
    </form>

    <Link href={`/blog/${id}/edit`}>Edit</Link>
  </>
}