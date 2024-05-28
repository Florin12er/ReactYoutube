import { Input } from "@headlessui/react";
import { Button } from "@headlessui/react";
import PropTypes from "prop-types";

const Search = () => {
  return (
    <div className="flex m-auto">
      <Input
        type="text"
        name="full_name"
        className="bg-zinc-900 custom-width rounded-s-xl"
      />
      <Button className="bg-neutral-600 w-10 rounded-r-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
          />
        </svg>
      </Button>
      <Button className="ml-4 rounded-3xl w-10 h-10 bg-neutral-600 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"
          />
        </svg>
      </Button>
    </div>
  );
};
const Notification = () => {
  return (
    <div className="flex">
      <Button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="white"
            d="M1664 1664h128v384H128v-384h128v256h1408zm-147-531l-557 557l-557-557l90-90l403 402V128h128v1317l403-402z"
          />
        </svg>
      </Button>
      <Button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
            <path
              fill="white"
              d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2.001 2.001 0 0 1-.212-.894V9a5 5 0 0 0-5-5"
            ></path>
          </g>
        </svg>
      </Button>
      <Button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="white"
            strokeDasharray={28}
            strokeDashoffset={28}
            strokeLinecap="round"
            strokeWidth={2}
          >
            <path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="28;0"
              ></animate>
            </path>
            <path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z">
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.5s"
                dur="0.4s"
                values="28;0"
              ></animate>
            </path>
          </g>
        </svg>
      </Button>
    </div>
  );
};

const Categories = ({ categories }) => {
  return (
    <>
      <div className="">
        {categories.map((category, index) => (
          <Button
            className="bg-neutral-600 text-sm p-2 text-hite rounded-xl ml-5"
            key={index}
          >
            {category}
          </Button>
        ))}
      </div>
    </>
  );
};
Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

const NavBar = () => {
  return (
    <>
      <div className="bg-black text-white flex p-4">
        <Search />
        <Notification />
      </div>
      <Categories
        categories={[
          "All",
          "Javascript",
          "Typescript",
          "Programming",
          "Weight Lifting",
          "Bowling",
          "Hiking",
          "React",
          "Next-js",
          "Frontend Web development",
          "Function Programming",
          "Object Oriented Programming",
          "Backend Web development",
          "Doom",
          "Doom mods",
        ]}
      />
    </>
  );
};

export default NavBar;
