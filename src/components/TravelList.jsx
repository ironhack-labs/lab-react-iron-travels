import { useState } from "react";
import travelPlansJSON from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import FavoritesList from "./FavoritesList";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansJSON);
  const [favoritePlans, setFavoritePlans] = useState([]);

  function deletePlan(id) {
    console.log(`Deleting plan with id ${id}`);
    // Filter out the plan with the specified id from the travelPlans array.
    const filteredPlans = travelPlans.filter((plan) => plan.id !== id);
    // Update the state with the new filtered array
    setTravelPlans(filteredPlans);
  }

  function addToFavorites(id) {
    console.log(`Adding plan with id ${id} to favorites`);
    // Filter out the plan with the specified id from the travelPlans array.
    let favoritePlan;
    const filteredPlans = travelPlans.filter((plan) => {
      // When the plan with the specified id is found, store it in the favoritePlan variable
      // and return false to remove it from the filtered array
      if (plan.id === id) {
        favoritePlan = plan;
        return false;
      }
      return true;
    });

    // Update the state with the new filtered array
    setTravelPlans(filteredPlans);
    // Add the favoritePlan to the favorites array
    setFavoritePlans([favoritePlan, ...favoritePlans]);
  }

  return (
    <div className="TravelList">
      <div className="list">
        {/* Bonus: Iteration 4 | Extract Component */}
        {travelPlans &&
          travelPlans.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              deletePlan={deletePlan}
              addToFavorites={addToFavorites}
            />
          ))}
      </div>
      {/* Bonus: Iteration 5 | Favorites */}
      <FavoritesList favoritePlans={favoritePlans} />
    </div>
  );
}

export default TravelList;
