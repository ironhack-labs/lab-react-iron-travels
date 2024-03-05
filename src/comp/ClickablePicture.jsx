import React, { useState } from "react";
import glasses from "../assets/images/maxence-glasses.png";
import noGlasses from "../assets/images/maxence.png";

function ClickablePicture() {
  const [displayImg, changeImg] = useState(noGlasses);

  const imgClick = () => {
    changeImg(!displayImg);
  };

  return (
    <div>
      <img src={displayImg ? noGlasses : glasses} onClick={imgClick} />;
    </div>
  );
}

export default ClickablePicture;