import CreatePost from "./features/posts/CreatePost";
import Posts from "./features/posts/Posts";
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <Posts />
      <CreatePost />
    </div>
  );
}

export default App;
