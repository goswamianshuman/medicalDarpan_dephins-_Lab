import "./App.css";
import Content from "./components/Content/Content";
import BottomNav from "./components/Navbar/BottomNav/BottomNav";
import TopNav from "./components/Navbar/TopNav/TopNav";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="bodyWrap">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
