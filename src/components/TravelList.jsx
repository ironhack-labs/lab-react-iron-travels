import travelPlansData from "../assets/travel-plans.json";
import FavoriteCard from "./FavoriteCard";
import TravelCard from "./TravelCard";
import { useState } from "react";

function TravelList() {
  // Delete button functionality
  const [travelListArray, setTravelListArray] = useState(travelPlansData);

  const deleteItemFromList = (card) => {
    setTravelListArray([...travelListArray].filter((element) => element.id !== card.id));
  };

  // Favorite button functionality
  const [favoriteListArray, setFavoriteListArray] = useState([]);

  const addItemToFavorites = (card) => {
    deleteItemFromList(card);
    setFavoriteListArray([...favoriteListArray, card]);
  };

  return (
    <div className="lists-container">
      <div className="travel-list">
      <h3>Travel list</h3>
        {travelListArray.map((card) => (
          <TravelCard
            key={card.id}
            plan={card}
            deleteCard={() => deleteItemFromList(card)}
            addToFavorites={() => addItemToFavorites(card)}
          />
        ))}
      </div>
      <div className="favorites-list">
        <h3 className="text-iron">Favorites</h3>
        {favoriteListArray.map((card) => (
          <FavoriteCard key={card.id} plan={card} />
        ))}
      </div>
    </div>
  );
}

export default TravelList;

// import travelPlansData from "../assets/travel-plans.json";
// import TravelCard from "./TravelCard";
// import { useState } from "react";

// function TravelList() {
//   const [travelListArray, setTravelListArray] = useState([...travelPlansData]);

//   const deleteItemFromList = (cardID) => {
//     setTravelListArray([...travelListArray].filter((element) => element.id !== cardID));
//   };

//   return (
//     <div className="travel-list">
//       {travelListArray.map((card) => (
//         <TravelCard
//           key={card.id}
//           imgURL={card.image}
//           destination={card.destination}
//           days={card.days}
//           plan={card.description}
//           price={card.totalCost}
//           incl={card.allInclusive}
//           deleteCard={() => deleteItemFromList(card.id)}
//         />
//       ))}
//     </div>
//   );
// }

// export default TravelList;
