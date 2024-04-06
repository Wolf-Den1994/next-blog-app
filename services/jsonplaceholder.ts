import type { Post, Photo } from "@/types/post"

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // next: {
      // revalidate: 60, // 1min
    // },
  });
  return response.json();
}

export async function getData(id: string): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // next: {
    //   revalidate: 60, // 1min
    // }
  });
  return response.json();
}

export async function getPhotos(): Promise<Photo[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10', {
    next: {
      revalidate: 60, // 1min
    }
  })
  return response.json();
}
