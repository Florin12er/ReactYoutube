import Home from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import Menu from "./SideBar.jsx";
function App() {
  return (
    <>
      <div className="flex gap-1">
        <div id="sidebar" className="deactivate">
          <Menu/>
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
