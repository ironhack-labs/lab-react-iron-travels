import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import { useState } from "react";


function getCostLabel(cost) {
  if (cost <= 350) {
    return "Great Deal"
  } else if (cost >= 1500) {
    return "Premium"
  } else {
    return null;
  }
}


function TravelList() {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);

   const handleDelete = (id) => {
  setTravelPlans(travelPlans.filter((travelPlan) => travelPlan.id !== id));
};


  return (
    <div>
      {travelPlans.map((travelPlan) => {
        return (
          <div className="travel-card" key={travelPlan.id}>
            <img src={travelPlan.image} alt={travelPlan.destination} />
            <div>
              <h2>
                {travelPlan.destination} ({travelPlan.days} Days)
              </h2>
              <em>{travelPlan.description}</em>
              <p>
                <strong>Price:</strong> {travelPlan.totalCost} €
              </p>
              <div className="label">{getCostLabel(travelPlan.totalCost)}</div>
              {travelPlan.allInclusive && <div className="label">All-Inclusive</div>}
            </div>
            <button onClick={() => handleDelete(travelPlan.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
