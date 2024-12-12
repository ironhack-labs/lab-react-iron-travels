import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

const TravelList = () => {
  travelPlansData;
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const handleDelete = (id) => {
    setTravelPlans(
      travelPlans.filter((currentTravelPlan) => currentTravelPlan.id !== id)
    );
  };
  return (
    <div>
      <h1>List</h1>
      <ul>
        {travelPlansData.map((currentTravelPlan) => (
          <li key={currentTravelPlan.id}>
            <div>
              <img src={currentTravelPlan.image} style={{ width: "150" }} />
            </div>
            <div>
              <h2>
                {currentTravelPlan.destination} {currentTravelPlan.days}
              </h2>
              <p>price ${currentTravelPlan.totalCost}</p>
              {currentTravelPlan.totalCost < 350 ? <p>Great Deal</p> : null}
              {currentTravelPlan.totalCost > 1500 ? <p>Premium</p> : null}
              {currentTravelPlan.allInclusive && <p>All Inclusive</p>}
              <button
                type="button"
                onClick={handleDelete(currentTravelPlan.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TravelList;
