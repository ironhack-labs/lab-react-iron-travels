import { useState } from "react";
import travels from "../data/travel-plans.json";
import { TravelPlanCard } from "./TravelPlanCard";
import { FavoriteList } from "./FavoriteList";
import "./TravelList.css";
export const TravelList = () => {
  const [travelsToDisplay, setTravelsToDisplay] = useState(travels);

  const deleteTravel = (id) => {
    const newList = travelsToDisplay.filter((travel) => travel.id !== id);
    setTravelsToDisplay(newList);
  };

  const favoriteTravel = (id) => {
    const findObj = travelsToDisplay.find((travel) => travel.id === id);
    const newArr = travelsToDisplay.map((travel) => {
      if (travel.id === id) {
        travel.favorite = true;
      }
      return travel;
    });
    setTravelsToDisplay(newArr);
  };

  return (
    <div className="main-container">
      <div className="travels-container">
        {travelsToDisplay.length ? (
          travelsToDisplay.map((plan) => {
            return (
              !plan.favorite && (
                <TravelPlanCard
                  key={plan.id}
                  plan={plan}
                  deleteFunction={deleteTravel}
                  favoriteFunction={favoriteTravel}
                />
              )
            );
          })
        ) : (
          <p id="sorry">Sorry! We don't have travels at the moment</p>
        )}
      </div>
      <FavoriteList travelsArr={travelsToDisplay} />
    </div>
  );
};
