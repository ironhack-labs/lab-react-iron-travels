// // src/components/TravelList.jsx
// import React, { useState } from "react";
// import travelPlansData from "../assets/travel-plans.json";
// import TravelPlanCard from "./TravelPlanCard";

// const TravelList = () => {
//   const [plans, setPlans] = useState(travelPlansData);
//   const [favorites, setFavorites] = useState([]);

//   const handleDelete = (id) => {
//     setPlans(plans.filter((plan) => plan.id !== id));
//   };

//   const handleFavorite = (plan) => {
//     setFavorites((prevFavorites) => {
//       if (prevFavorites.find((fav) => fav.id === plan.id)) {
//         return prevFavorites.filter((fav) => fav.id !== plan.id);
//       } else {
//         return [...prevFavorites, plan];
//       }
//     });
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "space-between" }}>
//       <div>
//         <h1>Travel Plans</h1>
//         <ul>
//           {plans.map((plan) => (
//             <TravelPlanCard
//               key={plan.id}
//               plan={plan}
//               onDelete={handleDelete}
//               onFavorite={handleFavorite}
//             />
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h1>Favorites</h1>
//         <ul>
//           {favorites.map((plan) => (
//             <TravelPlanCard
//               key={plan.id}
//               plan={plan}
//               onDelete={handleDelete}
//               onFavorite={handleFavorite}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TravelList;

// src/components/TravelList.jsx
import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === plan.id)) {
        return prevFavorites.filter((fav) => fav.id !== plan.id);
      } else {
        return [...prevFavorites, plan];
      }
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>Travel Plans</h1>
        <ul>
          {plans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              image={plan.image} // Pass the image object
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
        </ul>
      </div>
      <div>
        <h1>Favorites</h1>
        <ul>
          {favorites.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              image={plan.image} // Pass the image object
              onDelete={handleDelete}
              onFavorite={handleFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelList;
