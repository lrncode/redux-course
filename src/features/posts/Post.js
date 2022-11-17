import { useDispatch } from "react-redux";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const Post = ({ post }) => {
  const { title, content, id, userId, date } = post;
  return (
    <div className="post">
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{userId ? userId : "Unknown author"}</p>
        <TimeAgo timestamp={date} />
        <ReactionButtons post={post} />
      </div>
      <div>x</div>
    </div>
  );
};

export default Post;
