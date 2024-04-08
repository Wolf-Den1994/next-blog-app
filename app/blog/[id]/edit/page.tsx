import { getData } from "@/services/jsonplaceholder"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string
  }
}

async function updatePost(data: FormData) {
  'use server';

  const { title, body, id } = Object.fromEntries(data);

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body })
  })

  const post = await response.json();

  revalidatePath(`/blog/${post.id}`);
  redirect(`/blog/${post.id}`)
}

export default async function EditPost({ params: { id } }: Props) {
  const post = await getData(id)

  return (
    <div>
      <h1>Edit post page {id}</h1>

      <form className="content-form" action={updatePost}>
        <input type="text" placeholder="title" required name="title" defaultValue={post.title} />
        <textarea name="body" required placeholder="content" defaultValue={post.body} />
        <input type="hidden" name="id" value={post.id} />
        <input type="submit" value="Update post" />
      </form>
    </div>
  )
}