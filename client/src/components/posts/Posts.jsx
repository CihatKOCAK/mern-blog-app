import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.length > 0  ? posts.map((p) => (
        <Post key={p._id} post={p} />
      )): <h1 className="noPosts">No posts to show</h1>}
    </div>
  );
}
