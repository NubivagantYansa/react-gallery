import React from "react";

const ImageCard = ({ image }) => {
  const { description, urls } = image;

  return (
    <div>
      <img alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
