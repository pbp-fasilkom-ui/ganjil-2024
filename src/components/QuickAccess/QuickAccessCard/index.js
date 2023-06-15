import React, { useState } from "react";
import "./card.css";

const Index = ({
  title = "Title",
  subtitle = "Subtitle",
  description = "Description",
  image = "Image",
  target = "/",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <a href={target} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="card">
        <div
          className={
            isHovered ? "cardImageContainerHover" : "cardImageContainer"
          }
        >
          <img src={image} className="cardImage" />
        </div>
        <div className="cardContent">
          <h3>{title}</h3>
          <span className="subtitle">{subtitle}</span>
            <p className={isHovered ? "descriptionVisible" : "descriptionHidden"}>
              {description}
            </p>
        </div>
      </div>
    </a>
  );
};

export default Index;
