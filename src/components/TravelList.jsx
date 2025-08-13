import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import TravelPlanFavCard from "./TravelPlanFavCard";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);
  const [favTravels, setFavTravels] = useState([]);
  const [favBgColorIndex, setFavBgColorIndex] = useState(0);

  const removeTravelPlan = (index) => setTravels(travels.toSpliced(index, 1));
  const handleDeleteTravel = (index) => removeTravelPlan(index);
  const handleAddFav = (travel, index) => {
    setFavTravels([...favTravels, travel]);
    removeTravelPlan(index);
    setFavBgColorIndex(favBgColorIndex + 1);
  }

  return (
    <div className="travel-container">
      <div className="travel-list">
        {travels.map((plan, index) => {
          return <TravelPlanCard key={plan.id} plan={plan} index={index} onDelete={handleDeleteTravel} onAddFav={handleAddFav} favBgColorIndex={favBgColorIndex}/>;
        })}
      </div>
      <div className="fav-list">
        <h3>Favorites</h3>
        {favTravels.map(plan => <TravelPlanFavCard key={plan.id} plan={plan} />)}
      </div>
    </div>
  );
}
export default TravelList;
