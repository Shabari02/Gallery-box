import React from "react";
import ImgContainer from "./ImgContainer";

const Images = ({ images }) => {
  // console.log(images);
  return images.map((image) => (
    <div className="flex flex-wrap w-1/3">
      <div className="w-full p-1 md:p-2">
        <ImgContainer  key={image.id} image={image} />
      </div>
    </div>
  ));
};

export default Images;
