import React from "react";
import "./SideNav.css";
import star from "../assets/Icons/star.png";
import { useDarkMode } from "./DarkModeContext";

const SkillSection = ({ title, items }) => {
  const { isDarkMode } = useDarkMode();
  const renderStars = (level) => {
    const stars = [];
    for (let i = 0; i < level; i++) {
      stars.push(
        <img
          key={i}
          className="w-4 h-4" // Adjust the width and height as needed
          src={star}
          alt="Star"
        />,
      );
    }
    return stars;
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1c1b23]" : "bg-[rgb(97,103,122)] "
      } border-1 min-h-[170px] min-w-[350px] p-2 items-center justify-evenly flex flex-col flex-wrap rounded-3xl shadow-2xl ease-in-out duration-100`}
    >
      <h1 className="text-[#D8D9DA] sm:text-2xl text-2xl font-semibold underline">
        {title.toUpperCase()}
      </h1>
      <div className="flex flex-row flex-wrap justify-evenly sm:gap-4 gap-2 mt-[8px] mb-[2px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center m-3 hover:scale-[1.2] gap-1 ease-in-out duration-100"
          >
            <div className="relative ">
              <img
                className="w-[65px] rounded-lg h-[68px]"
                src={item.source}
                alt={item.name}
              />
              <div
                className={`${
                  isDarkMode ? "bg-[#1c1b23]" : "bg-[#61677A]"
                } flex flex-col items-center justify-center h-[112%] w-[110%] text-bold text-[15px] text-center absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-600`}
              >
                <p className="text-[#F0F0F0]">{item.name}</p>
                <div className="flex justify-center">
                  {renderStars(item.level)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
