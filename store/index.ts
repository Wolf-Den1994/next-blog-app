import {create} from 'zustand';
import type { Post } from "@/types/post"
import { getAllPosts, getPostsBySearch } from '@/services/jsonplaceholder';

type UsePosts = {
  posts: Post[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
}

export const usePosts = create<UsePosts>((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({loading: true})
    const posts = await getAllPosts();
    set({posts, loading: false}) 
  },
  getPostsBySearch: async (search) => {
    set({loading: true})
    const posts = await getPostsBySearch(search);
    set({posts, loading: false}) 
  }
}))