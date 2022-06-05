import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  const showAlert = () => {
    alert("hi");
  };

  const users = ["V", 'Johnny'];

  return (
    <div onClick={showAlert}>
      <Header />
      <Page users={users} title="My first page" description="My first description" />
      <Footer />
    </div>
  );
}

export default App;