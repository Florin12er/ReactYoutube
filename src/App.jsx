import Home from "./HomePage.jsx";
import NavBar from "./NavBar.jsx";
import Menu from "./SideBar.jsx";
import { useState, useEffect } from "react";



function Width() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Current width of the page: {width}px</p>
    </div>
  );
}

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarActive(!isSidebarActive);
  };



  return (
    <>
      <div className="flex gap-1">
        <div
          id="sidebar"
          className={isSidebarActive ? "activate" : "deactivate"}
        >
          <Menu
            onToggleSidebar={handleSidebarToggle}
            isSidebarActive={isSidebarActive}
          />
        </div>
        <div className="flex-1">
          <NavBar />
          <Home grid={isSidebarActive ? "smalllGrid" : "biggGrid"} />
        </div>
      </div>
            <Width/>
    </>
  );
}

export default App;
