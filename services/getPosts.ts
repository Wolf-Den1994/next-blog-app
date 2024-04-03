export const getAllPosts = async () => {
  const response = await fetch('/api/posts', {
    // next: {
      // revalidate: 60, // 1min
    // }
  });

  if (!response.ok) {
    throw new Error('Unable to fetch!')
  }

  return response.json();
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`, {
    // next: {
      // revalidate: 60, // 1min
    // }
  });

  if (!response.ok) {
    throw new Error('Unable to fetch!')
  }

  return response.json();
}
