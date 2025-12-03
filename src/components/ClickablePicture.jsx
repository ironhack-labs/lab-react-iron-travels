import { useState } from "react";
import imgNormal from "../assets/maxence.png";
import imgClicked from "../assets/assets/maxence-glasses.png";

function ClickablePicture() {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : imgNormal}
      alt="Clickable"
      onClick={() => setClicked(!clicked)}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ClickablePicture;
