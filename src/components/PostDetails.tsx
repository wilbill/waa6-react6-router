import { Link, useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "This is the content for Post 1" },
  { id: 2, title: "Post 2", content: "This is the content for Post 2" },
  { id: 3, title: "Post 3", content: "This is the content for Post 3" },
];

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === parseInt(id!));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
    </div>
  );
};

export default PostDetails;
