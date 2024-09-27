import React, { useState } from "react";
import TravelPlanCard from "../TravelPlanCard/TravelPlanCard";
import travelPlansData from "../../assets/travel-plans.json";

import "./TravelList.css";

const TravelList = () => {
  const [travel, setTravel] = useState(travelPlansData);

  const deleteTravel = (travelId) => {
    const filteredTravels = travel.filter((oneTravel) => {
      return oneTravel.id !== travelId;
    });

    setTravel(filteredTravels);
  };

  const makeFavorite = (travelId) => {
    const filteredFavorites = travel.filter((oneTravel) => {
      return oneTravel.id !== travelId;
    });

    setTravel(filteredFavorites);
  };

  return (
    <div>
      {travel.map((oneTravel) => {
        return (
          <TravelPlanCard
            key={oneTravel.id}
            oneTravel={oneTravel}
            deleteButton={deleteTravel}
            favoriteButton={makeFavorite}
          />
        );
      })}
    </div>
  );
};

export default TravelList;
