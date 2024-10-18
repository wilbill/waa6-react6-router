import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1", content: "This is the content for Post 1" },
  { id: 2, title: "Post 2", content: "This is the content for Post 2" },
  { id: 3, title: "Post 3", content: "This is the content for Post 3" },
];

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === parseInt(id!));
  const navigate = useNavigate();

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Post:", { id, title, content });
    navigate(`/posts/${id}`);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
