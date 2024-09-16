
import { useState } from "react";

function LikeButton() {
  let [value, valueChange] = useState(0);
  let valueUp = () => valueChange(value + 1);

  return (
    <div>
      <button onClick={valueUp}>{value} Likes</button>
    </div>
  );
}

export default LikeButton;