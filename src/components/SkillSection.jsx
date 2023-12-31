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
      } border-1 min-h-[170px] min-w-[350px] p-2 items-center justify-evenly flex flex-col rounded-3xl shadow-2xl ease-in-out duration-100`}
    >
      <h1 className="text-[#D8D9DA] sm:text-2xl text-2xl font-semibold underline">
        {title.toUpperCase()}
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-center sm:gap-4 gap-2 mt-[8px] mb-[2px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center m-3 gap-1 ease-in-out duration-100"
          >
            <div className="relative group/item">
              <img
                className="w-[65px] rounded-lg h-[68px] translate-y-3 group-hover/item:translate-y-0 transition-all ease-in-out duration-300"
                src={item.source}
                alt={item.name}
              />
              <div
                className={`${
                  isDarkMode ? "bg-[#1c1b23]" : "bg-[#61677A]"
                } group-hover/item:translate-y-1 -translate-y-2 flex-col items-center justify-center text-bold text-[15px] text-center transition-all opacity-0 group-hover/item:opacity-100 duration-150`}
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
