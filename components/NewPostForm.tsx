export default function NewPostForm({ onCreated }: {
  onCreated: (id?: number) => Promise<void>
}) {
  async function createPost(data: FormData) {
    'use server';
  
    const { title, body } = Object.fromEntries(data);
  
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, userId: 1 })
    })
  
    const post = await response.json();

    await onCreated(post.id);
  }

  return (
    <form className="content-form" action={createPost}>
      <input type="text" name="title" placeholder="title" required />
      <textarea name="body" placeholder="content" required /> 
      <button type="submit">Add post</button>
    </form>
  )
}