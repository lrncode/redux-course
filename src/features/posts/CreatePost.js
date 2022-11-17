import { useState } from "react";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatePost = () => {
  const [postData, setPostData] = useState({ title: "", content: "" });
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const { title, content } = postData;
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postAdded(title, content, userId));
  };
  const onPostChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };
  const onUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const userOptions = users.map((user) => (
    <option key={user.id}>{user.name}</option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <form onSubmit={onSubmit}>
      <h1>Create new post</h1>
      <input
        placeholder="Insert title here"
        value={postData.title}
        name="title"
        onChange={onPostChange}
      />
      <input
        placeholder="Insert text here"
        value={postData.content}
        name="content"
        onChange={onPostChange}
      />
      <h1>users</h1>
      <select value={userId} onChange={onUserIdChange}>
        <option value=""></option>
        {userOptions}
      </select>
      <button disabled={!canSave} type="submit">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
