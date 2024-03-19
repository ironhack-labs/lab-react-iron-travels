import travelPlansData from "../../../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css";
import TravelPlanCard from "../../TravelPlanCard";

function TravelList() {
  const [travel, travelShow] = useState(travelPlansData);
  let favoriteArray = [];
  const handleClick = (id) => {
    const filteredDestinations = travel.filter(
      (aDestination) => aDestination.id !== id
    );
    travelShow(filteredDestinations);
  };

  const handleFavorite = (id) => {
    const favorite = travel.find((aDestination) => aDestination.id === id);
    favoriteArray.push(favorite);
  };

  return (
    <div>
      {travel.map((destination) => {
        return (
          <TravelPlanCard
            place={destination}
            handleClick={handleClick}
            handleFavorite={handleFavorite}
            key={destination.id}
            favorite={favoriteArray}
          />
        );
      })}
    </div>
  );
}

export default TravelList;
{
  /* <img src={destination.image} alt="" /> */
}
