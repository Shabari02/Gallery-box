import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center m-4 mb-6">
      <h1 class="flex items-center text-4xl md:text-6xl font-extrabold text-center text-sec">
        Gallery
        <span class="bg-blue-100 text-blue-800 text-2xl md:text-6xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
          Box
        </span>
      </h1>
    </div>
  );
};

export default Header;
