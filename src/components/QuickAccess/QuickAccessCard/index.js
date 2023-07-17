import React, { useState, useEffect } from "react";

const Index = ({
  title = "Title",
  subtitle = "Subtitle",
  description = "Description",
  image = "Image",
  target = "/",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  // Load image dynamically
  useEffect(() => {
    if (image && image.startsWith("img")) {
      import(`${image}`) // Make sure the path is correct
        .then((img) => {
          setImgSrc(img.default);
        })
        .catch((error) => console.error(`Error loading image: ${error}`));
    }
  }, [image]);

  return (
    <a
      href={target}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="text-black no-underline"
    >
      <div className="flex flex-col h-96 w-full max-w-64 bg-gray-200 text-black rounded-xl overflow-hidden transition duration-200 ease-in-out transform hover:scale-105" >
        <div className={isHovered ? "h-0 hidden" : "h-2/4 flex"}>
          <img
            src={image && (image.startsWith("/docubase")||image.startsWith("http")) ? image : "img/default_card_image.webp"}
            className={`object-cover w-full h-auto ${
              image && (image.startsWith("/docubase")||image.startsWith("http"))? "" : "filter grayscale blur-md"
            }`}
            alt="Card Image"
          />
        </div>

        <div className="flex flex-col gap-1 p-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <span className="italic">{subtitle}</span>
          <p
            className={
              isHovered
                ? "text-ellipsis overflow-clip h-full line-clamp-6 break-words"
                : "hidden"
            }
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );  
};

export default Index;
