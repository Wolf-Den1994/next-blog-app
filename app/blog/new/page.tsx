import NewPostForm from "@/components/NewPostForm";
import { redirect } from "next/navigation";

export default function CreatePost() {
  return (
    <div className="content">
      <h1>Create new post</h1>
      <NewPostForm onCreated={async (id) => {
        'use server';

        redirect(`/blog/${id}`)
      }} />
    </div>
  )
}