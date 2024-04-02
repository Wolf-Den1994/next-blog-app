import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type Props = {
  posts: Post[];
}

const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export { Posts };
