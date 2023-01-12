import React from "react";

const ImgContainer = ({ image }) => {
//   const openImg = (url) => {
//     window.open(url);
//   };
//   console.log(image.urls);
  return (
    <img
      src={image.urls.regular}
      alt="img"
      className="hover:cursor-pointer"
    />
  );
};

export default ImgContainer;
