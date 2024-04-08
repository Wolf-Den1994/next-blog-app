export default function CreatePost() {
  return (
    <div className="content">
      <h1>Create new post</h1>
      <form className="content-form">
        <input type="text" name="title" placeholder="title" />
        <textarea name="content" placeholder="content" /> 
        <button type="submit">Add post</button>
      </form>
    </div>
  )
}