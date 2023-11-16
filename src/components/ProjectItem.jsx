import React from "react";
import { FaGithub } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const ProjectItem = ({ img, title, link }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode ? "" : "shadow-xl"
      } max-w-[100%] relative flex items-center justify-center h-auto w-full  shadow-gray-400 rounded-xl group hover:bg-gradient-to-b hover:scale-[1.0150] from-gray-700 to-[#14131a] ease-in-out duration-700`}
    >
      <img
        className="w-full h-full rounded-xl group-hover:opacity-10 object-cover"
        src={img}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h2 className="text-1xl md:text-1xl  md:mt-10px sm:mt-1px lg:mt-[5px] lg:text-3xl lg:mb-[20px] font-bold text-white tracking-wider text-center">
          {title}
        </h2>
        <div className="">
          <p className="pb-4 pt-22 text-white text-center">React JS</p>
          <a href={link} className="">
            <div className="p-2 flex justify-center items-center rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-110 ease-in duration-200">
              <FaGithub className="w-[35px] h-[35px]" />
              <p className="p-1">Source Code</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
