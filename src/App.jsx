import Home from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import Sidebar from "./SideBar.jsx";
function App() {
  return (
    <>
      <div className="flex gap-1">
        <div className="sidebar w-[120px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <NavBar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
