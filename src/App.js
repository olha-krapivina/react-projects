import posts from "./posts.json";
import PostList from "./components/PostList";
import Registration from "./components/Regisration";
import Popup from "./components/Popup";

function App() {
  return (
    <div>
      <Popup
        buttonName="Add post"
        title="Enter post data"
        ContentComponent={Registration}
      ></Popup>
      {/* <PostList posts={posts} /> */}
    </div>
  );
}

export default App;
