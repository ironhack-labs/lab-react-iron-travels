// // src/components/TravelPlanCard.jsx
// import React, { useState } from "react";

// const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

// const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
//   const [colorIndex, setColorIndex] = useState(0);

//   const handleFavorite = () => {
//     onFavorite(plan);
//     setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
//   };

//   return (
//     <li>
//       {plan.destination} - ${plan.totalCost}
//       {plan.totalCost <= 350 && <span> - Great Deal</span>}
//       {plan.totalCost >= 1500 && <span> - Premium</span>}
//       {plan.allInclusive && <span> - All Inclusive</span>}
//       <button onClick={() => onDelete(plan.id)}>Delete</button>
//       <button
//         style={{ backgroundColor: colors[colorIndex] }}
//         onClick={handleFavorite}
//       >
//         ♡
//       </button>
//     </li>
//   );
// };

// export default TravelPlanCard;

// src/components/TravelPlanCard.jsx
import React, { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
  const [colorIndex, setColorIndex] = useState(0);

  const handleFavorite = () => {
    onFavorite(plan);
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <li>
      <img src={plan.image} alt={plan.destination} />
      {plan.destination} - ${plan.totalCost}
      {plan.totalCost <= 350 && <span> - Great Deal</span>}
      {plan.totalCost >= 1500 && <span> - Premium</span>}
      {plan.allInclusive && <span> - All Inclusive</span>}
      <button onClick={() => onDelete(plan.id)}>Delete</button>
      <button
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={handleFavorite}
      >
        ♡
      </button>
    </li>
  );
};

export default TravelPlanCard;
