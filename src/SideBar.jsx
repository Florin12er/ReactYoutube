import { Button } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import classNames from "classnames";
import SidebarShortPart from "./Parts/ShortSideBar";
import SideBarBigPart from "./Parts/LongSideBar";

const SidebarComponent = ({ svg, name, isActive }) => (
  <div className={classNames("w-full rounded-xl", {
    "hover:bg-gray-500 big grid sidebar-grid-columns items-center": isActive,
    "hover:bg-gray-500 small": !isActive,
  })}>
    <div className="flex justify-center items-center p-4">
      <Button>{svg}</Button>
    </div>
    <h3 className={classNames("text-center", {
      "text-2xl": isActive,
      "text-xs": !isActive,
    })}>
      {name}
    </h3>
  </div>
);

SidebarComponent.propTypes = {
  svg: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Menu = ({ onToggleSidebar, isSidebarActive }) => {
  const currentSidebarParts = isSidebarActive ? SideBarBigPart : SidebarShortPart;
  return (
    <>
      <div className="flex p-4 relative">
        <div
          onClick={onToggleSidebar}
          className="w-12 p-2 cursor-pointer hover:bg-zinc-400 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
          </svg>
        </div>
        <div className="mt-2 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="8.83em" height="2em" viewBox="0 0 512 116">
            <path fill="#f00" d="M159.89 17.93a20.552 20.552 0 0 0-14.471-14.47C132.73 0 81.666 0 81.666 0S30.6.105 17.913 3.565a20.552 20.552 0 0 0-14.47 14.47c-3.838 22.545-5.327 56.896.105 78.538a20.552 20.552 0 0 0 14.47 14.47c12.688 3.46 63.753 3.46 63.753 3.46s51.065 0 63.753-3.46a20.552 20.552 0 0 0 14.47-14.47c4.047-22.576 5.295-56.906-.105-78.642"></path>
            <path fill="#fff" d="m65.413 81.788l42.362-24.536l-42.362-24.537z"></path>
          </svg>
        </div>
      </div>
      {currentSidebarParts.map((part, index) => (
        <SidebarComponent
          key={index}
          svg={part.svg}
          name={part.name}
          isActive={isSidebarActive}
        />
      ))}
    </>
  );
};

Menu.propTypes = {
  onToggleSidebar: PropTypes.func.isRequired,
  isSidebarActive: PropTypes.bool.isRequired,
};

export default Menu;
