import React from "react";
import { Link } from "react-router-dom";
import bg from "../images/bg-Image.jpg";

const Homepage = () => {
  return (
    <div className="grid grid-cols-2 mx-36 place-items-center h-screen">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl">
          Design Your HTML elements without directly writting any CSS!
        </h2>
        <Link to={'/button'}>
          <button className="bg-blue-500 text-white font-semibold px-10 py-3 rounded-md">
            Get Started
          </button>
        </Link>
      </div>
      <div>
        <img src={bg} alt="main" />
      </div>
    </div>
  );
};

export default Homepage;
