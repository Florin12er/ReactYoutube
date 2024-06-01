import { Button } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import classNames from "classnames";
import SidebarShortPart from "./Parts/ShortSideBar";
import SideBarBigPart from "./Parts/LongSideBar";
import YoutubeLogo from "./Parts/YoutubeLogo";

const SidebarComponent = ({ svg, name, isActive }) => (
  <div
    className={classNames("w-full rounded-xl", {
      "hover:bg-gray-500 big grid sidebar-grid-columns items-center": isActive,
      "hover:bg-gray-500 small": !isActive,
    })}
  >
    <div className="flex justify-center items-center p-4">
      <Button>{svg}</Button>
    </div>
    <h3
      className={classNames("text-center", {
        "text-2xl": isActive,
        "text-xs": !isActive,
      })}
    >
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
  const currentSidebarParts = isSidebarActive
    ? SideBarBigPart
    : SidebarShortPart;
  return (
    <>
      <div className="flex p-4 relative">
        <div
          onClick={onToggleSidebar}
          className="w-12 p-2 cursor-pointer hover:bg-zinc-400 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
            ></path>
          </svg>
        </div>
        <YoutubeLogo />
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
