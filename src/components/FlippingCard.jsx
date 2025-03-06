import React, { useState } from "react";
import "./FlippingCard.css"; // CSS file for the flip effect

const FlippingCard = ({ frontImage, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`flipping-card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="card-inner">
        <div className="card-front">
          <img src={frontImage} alt="Card Front" />
        </div>
        <div className="card-back">
          <div className="card-content">{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
