import { Metadata } from "next"

type Props = {
  params: {
    id: string
  }
}

export function generateMetadata({ params: { id } }: Props): Metadata {
  return {
    title: id,
  }
}

export default function Post({ params: { id } }: Props) {
  return <h1>Post page {id}</h1>
}