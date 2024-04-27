import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Categories from "./Categories";
import Income from "./Income";
import Promote from "./Promote";
import Help from "./Help";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import setting from "./../resources/setting.png";
import dashboard from "./../resources/dashboard.png";
import product from "./../resources/product.png";
import categories from "./../resources/categories.png";
import income from "./../resources/income.png";
import promote from "./../resources/promote.png";
import help from "./../resources/help.png";
import evano from "./../resources/evano.png";

function SideBar() {
  const [Expanded, setExpanded] = useState(true);
  const [SelectedMenu, setSelectedMenu] = useState(<Dashboard />);
  const [ActiveMenuIndex, setActiveMenuIndex] = useState(0);

  const Menus = [
    { title: "Dashboard", component: <Dashboard />, src: dashboard },
    { title: "Products", component: <Products />, src: product },
    { title: "Categories", component: <Categories />, src: categories },
    { title: "Income", component: <Income />, src: income },
    { title: "Promote", component: <Promote />, src: promote },
    { title: "Help", component: <Help />, src: help },
  ];

  const handleMenuClick = (index) => {
    setSelectedMenu(Menus[index].component);
    setActiveMenuIndex(index);
  };

  return (
    <div className="flex bg-[#f3f6fd]">
      <div
        className={`${
          Expanded ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-[#ffffff] relative flex flex-col justify-between`}
      >
        <div>
          <div className="flex gap-x-4 items-center">
            <img
              src={setting}
              className="cursor-pointer duration-500 w-10 h-10 object-contain"
              onClick={() => setExpanded(!Expanded)}
            />
            <h1
              className={`text-[#000000] origin-left font-medium text-xl duration-200 ${
                !Expanded && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`flex rounded-sm p-2 text-[#] text-sm gap-x-4 items-center cursor-pointer ${
                  index === ActiveMenuIndex
                    ? !Expanded
                      ? "bg-[#5932ea] text-white rounded-full"
                      : "bg-black text-white"
                    : "mt-2 rounded-full hover:bg-black hover:text-white"
                }`}
                onClick={() => handleMenuClick(index)}
              >
                <img src={menu.src} className="w-10 h-10 object-contain" />
                <span
                  className={`${
                    !Expanded && "hidden"
                  } origin-left duration-200 flex justify-between items-center w-full`}
                >
                  {menu.title}
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`text-[#404b52] mt-1 ml-6 hover:text-white ${
                      index === ActiveMenuIndex
                        ? `bg-[#000000] text-[#ffffff] ${!Expanded ? "" : ""}`
                        : ""
                    }`}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <div
            className={`block rounded-3xl bg-[#24175e] text-center ${
              !Expanded && "scale-0"
            }`}
          >
            <div className="p-6 mb-10">
              <p className="mb-2 text-base text-white">
                Upgrade to PRO to get access all Features!
              </p>
              <a
                href="#"
                className="mt-3 inline-block rounded-full bg-white px-6 pb-2 pt-2.5 text-sm px-12 font-bold text-[#000000]"
              >
                Get Pro Now!
              </a>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <img
              src={evano}
              className="cursor-pointer rounded-full duration-500 w-10 h-10 object-contain"
            />
            <div className={`mx-5 ${!Expanded && "scale-0"}`}>
              <h4 className="text-xl font-bold">Evano</h4>
              <div className="flex gap-2 mt-1 text-sm font-light text-[#b5b7c0]">
                Product Manager
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-[#404b52] mt-1 ml-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-7 flex-1 h-screen">
        <h1 className="text-2xl font-semibold">
          {SelectedMenu ? SelectedMenu.props.title : "Home Page"}
        </h1>
        {SelectedMenu ? (
          SelectedMenu
        ) : (
          <p>Select a menu item to view content.</p>
        )}
      </div>
    </div>
  );
}

export default SideBar;
