import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img className="postImg" src={post.photo} alt="" />
      <div className="postInfo">
        <div className="postCtgs">
          {post.categories.map((category) => {
            return <span className="postCtg">{category.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.content}</p>
    </div>
  );
};

export default Post;
