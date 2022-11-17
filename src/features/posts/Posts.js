import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { selectAllPosts } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
const Posts = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div>
      {orderedPosts.map((post) => (
        <Post key={nanoid()} post={post} />
      ))}
    </div>
  );
};

export default Posts;
