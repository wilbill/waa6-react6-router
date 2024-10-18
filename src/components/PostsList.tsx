import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "This is the content for Post 1" },
  { id: 2, title: "Post 2", content: "This is the content for Post 2" },
  { id: 3, title: "Post 3", content: "This is the content for Post 3" },
];

const PostsList = () => {
  return (
    <div>
      <h1>Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
