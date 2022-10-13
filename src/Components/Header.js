import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { Context } from "../context/GlobalContext";

const Header = () => {
  const {theme,settheme} = useContext(Context)
  const lists = [
    { name: "Button", link: "/button" },
    { name: "Paragraph", link: "/para" },
    { name: "Input", link: "/input" },
  ];
  return (
    <header
      className={`border-b py-4 px-10 flex items-center justify-between ${
        theme ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex space-x-10 items-center">
        <div className="h-7">
          <img
            className="h-full block object-cover"
            src={logo}
            alt="Logo"
            title="logo"
          />
        </div>
        <ul className="flex gap-5 items-center font-medium">
          {lists.map((list) => {
            return (
              <NavLink
                to={list.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 underline underline-offset-8"
                    : "inactive"
                }
                key={list.name}
              >
                {list.name}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="pr-10">
        {theme ? (
          <div
            onClick={() => settheme(false)}
            className="bg-yellow-500 p-2 rounded-full cursor-pointer"
          >
            <BsFillSunFill color="" size={20} />
          </div>
        ) : (
          <div
            onClick={() => settheme(true)}
            className="bg-blue-500 p-2 rounded-full cursor-pointer"
          >
            <BsFillMoonStarsFill size={20} color="white" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
