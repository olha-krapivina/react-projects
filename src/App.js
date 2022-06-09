import posts from "./posts.json";
import PostList from "./components/PostList";
import Registration from "./components/Regisration";

function App() {
  return (
    <div>
      <Registration />
      {/* <PostList posts={posts} /> */}
    </div>
  );
}

export default App;