import { Button } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const SidebarShortPart = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
      </svg>
    ),
    name: "Home",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.5 4.5 0 0 0-2.402 4.193a4.52 4.52 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.53 4.53 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.49 4.49 0 0 0 2.39-4.192a4.53 4.53 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z"
        ></path>
      </svg>
    ),
    name: "Shorts",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M4.616 21q-.691 0-1.153-.462T3 19.385v-8.77q0-.69.463-1.152T4.615 9h14.77q.69 0 1.152.463T21 10.616v8.769q0 .69-.463 1.153T19.385 21zm0-1h14.769q.23 0 .423-.192t.192-.424v-8.768q0-.231-.192-.424T19.385 10H4.615q-.23 0-.423.192T4 10.616v8.769q0 .23.192.423t.423.192m5.885-1.923L15.116 15L10.5 11.923zm-6-10.846v-1h15v1zm3-2.77v-1h9v1zM4 20V10z"
        ></path>
      </svg>
    ),
    name: "Subscriptions",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path fill="white" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z"></path>
        <path
          fill="white"
          d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"
        ></path>
      </svg>
    ),
    name: "You",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"
        ></path>
      </svg>
    ),
    name: "History",
  },
];
const SideBarBigPart = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path fill="white" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
      </svg>
    ),
    name: "Home",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="m18.931 9.99l-1.441-.601l1.717-.913a4.48 4.48 0 0 0 1.874-6.078a4.506 4.506 0 0 0-6.09-1.874L4.792 5.929a4.5 4.5 0 0 0-2.402 4.193a4.52 4.52 0 0 0 2.666 3.904c.036.012 1.442.6 1.442.6l-1.706.901a4.51 4.51 0 0 0-2.369 3.967A4.53 4.53 0 0 0 6.93 24c.725 0 1.437-.174 2.08-.508l10.21-5.406a4.49 4.49 0 0 0 2.39-4.192a4.53 4.53 0 0 0-2.678-3.904Zm-9.334 5.2V8.824l6.007 3.184z"
        ></path>
      </svg>
    ),
    name: "Shorts",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M4.616 21q-.691 0-1.153-.462T3 19.385v-8.77q0-.69.463-1.152T4.615 9h14.77q.69 0 1.152.463T21 10.616v8.769q0 .69-.463 1.153T19.385 21zm0-1h14.769q.23 0 .423-.192t.192-.424v-8.768q0-.231-.192-.424T19.385 10H4.615q-.23 0-.423.192T4 10.616v8.769q0 .23.192.423t.423.192m5.885-1.923L15.116 15L10.5 11.923zm-6-10.846v-1h15v1zm3-2.77v-1h9v1zM4 20V10z"
        ></path>
      </svg>
    ),
    name: "Subscriptions",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path fill="white" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z"></path>
        <path
          fill="white"
          d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"
        ></path>
      </svg>
    ),
    name: "You",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"
        ></path>
      </svg>
    ),
    name: "History",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 14 14"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.15.555a.389.389 0 0 0-.399 0a.26.26 0 0 0-.06.34c1.227 2.123 1.486 5.016-.19 6.611a5.505 5.505 0 0 1-1.495-1.994a3.88 3.88 0 0 0-1.995 3.49a4.688 4.688 0 0 0 4.987 4.488c3.211 0 4.877-1.994 4.986-4.488C12.114 6.01 9.99 2.33 6.15.555"
        ></path>
      </svg>
    ),
    name: "Trending",
  },
];
const SidebarComponent = ({ svg, name, id }) => {
  return (
    <>
      <div id={id} className="w-full hover:bg-gray-500 rounded-xl">
        <div className="flex justify-center items-center p-4">
          <Button>{svg}</Button>
        </div>
        <h3 id="text" className="text-center text-xs">
          {name}
        </h3>
      </div>
    </>
  );
};


SidebarComponent.propTypes = {
  svg: PropTypes.node, // Change this to PropTypes.node to accept JSX elements
  name: PropTypes.string.isRequired,
};
const Menu = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  function ChangeTheme() {
    const Sidebar = document.getElementById("sidebar");
    const Parts = document.querySelectorAll("#part");
    const Texts = document.querySelectorAll("#text");

    setIsSidebarActive(!isSidebarActive);

    if (Sidebar.className === "deactivate") {
      Sidebar.className = "activate";
      Parts.forEach((part) => {
        part.className =
          "w-full grid sidebar-grid-columns items-center hover:bg-gray-500 rounded-xl";
      });
      Texts.forEach((text) => {
        text.className = "text-center text-2xl";
      });
    } else {
      Sidebar.className = "deactivate";
      Parts.forEach((part) => {
        part.className = "w-full hover:bg-gray-500 rounded-xl";
      });
      Texts.forEach((text) => {
        text.className = "text-center text-xs";
      });
    }
  }
  const currentSidebarParts = isSidebarActive ? SideBarBigPart : SidebarShortPart;
  return (
    <>
      <div className="flex p-4 relative">
        <div
          onClick={ChangeTheme}
          className="w-12 p-2 cursor-pointer hover:bg-zinc-400 rounded-full"
        >
          <div>
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
        </div>
        <div className="mt-2 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.83em"
            height="2em"
            viewBox="0 0 512 116"
          >
            <path
              fill="#f00"
              d="M159.89 17.93a20.552 20.552 0 0 0-14.471-14.47C132.73 0 81.666 0 81.666 0S30.6.105 17.913 3.565a20.552 20.552 0 0 0-14.47 14.47c-3.838 22.545-5.327 56.896.105 78.538a20.552 20.552 0 0 0 14.47 14.47c12.688 3.46 63.753 3.46 63.753 3.46s51.065 0 63.753-3.46a20.552 20.552 0 0 0 14.47-14.47c4.047-22.576 5.295-56.906-.105-78.642"
            ></path>
            <path
              fill="#fff"
              d="m65.413 81.788l42.362-24.536l-42.362-24.537z"
            ></path>
          </svg>
        </div>
      </div>
      <div id="sidebar" className={isSidebarActive ? "activate" : "deactivate"}>
        {currentSidebarParts.map((part, index) => (
          <SidebarComponent id="part" key={index} svg={part.svg} name={part.name} />
        ))}
      </div>
    </>
  );
};

export default Menu;
