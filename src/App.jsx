import Home from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import Menu from "./SideBar.jsx";
import { useState } from "react";

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <div className="flex gap-1">
        <div id="sidebar" className={isSidebarActive ? "activate" : "deactivate"}>
          <Menu onToggleSidebar={handleSidebarToggle} isSidebarActive={isSidebarActive} />
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

