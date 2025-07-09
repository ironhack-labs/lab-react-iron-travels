import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);
  const [favourites, setFavourites] = useState([]);

  const deletePlan = (planId) => {
    const newFav = travelPlan.find((plan) => plan.id === planId);
    setFavourites((prevItems) => [...prevItems, newFav]);

    const newList = travelPlan.filter((plan) => {
      return plan.id !== planId;
    });

    setTravelPlan(newList);
    //console.log(favourites);
  };

  return (
    <div className="super-container">
      <div className="container">
        <TravelPlanCard plans={travelPlan} callbackToDelete={deletePlan} />;
      </div>

      {favourites.map((fav) => {
        return (
          <div className="card">
            <img src={fav.image} alt="place image" />
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
