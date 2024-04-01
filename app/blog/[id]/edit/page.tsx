type Props = {
  params: {
    id: string
  }
}

export default function EditPost({ params: { id } }: Props) {
  return <h1>Edit post page {id}</h1>
}