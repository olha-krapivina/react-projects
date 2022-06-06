import posts from "./posts.json";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
}

export default App;