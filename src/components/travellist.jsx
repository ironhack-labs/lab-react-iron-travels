import { useState } from "react";
import TravelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./travelplancard.jsx";
import Favorites from "./favorites.jsx";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(TravelPlansData);
  const [favoritePlans, setFavoritePlans] = useState([])

  function deletePlan(planId) {
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== planId;
    });

    setTravelPlans(filteredPlans);
  }

  function addFavoritePlans (plan) {
    setFavoritePlans([...favoritePlans, plan])
  }

  return (
     <div>
    {travelPlans.map((plan) => (
      <TravelPlanCard key={plan.id} plan={plan} deletePlan={deletePlan} addFavoritePlans={addFavoritePlans} />
      
    ))}

    <Favorites favoritePlans={favoritePlans} />
  </div>
  ) 
  
  
}
export default TravelList;
