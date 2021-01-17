import React, { useEffect, useState } from "react";

const ImageCard = ({ image }) => {
  const imageRef = React.createRef();
  const { description, urls } = image;
  const [span, setSpan] = useState(0);

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpansFromRef);
  }, []);

  const setSpansFromRef = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); // +1 just to make sure it's rounded up
    return setSpan(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
