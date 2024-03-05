import { useState } from "react";
import travelData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [travelPlansData, setTravelPlanData] = useState(travelData);

  const deleteTravel = (travelId) => {
    const filteredTravelData = travelPlansData.filter(
      (travelPlan) => travelPlan.id !== travelId
    );
    setTravelPlanData(filteredTravelData);
  };

  return (
    <div>
      {travelPlansData.map((travel) => {
        const plan = {
          id: travel.id,
          image: travel.image,
          destination: travel.destination,
          days: travel.days,
          description: travel.description,
          totalCost: travel.totalCost,
          allInclusive: travel.allInclusive,
        };
        return (
          <TravelPlanCard
            key={plan.id}
            plan={plan}
            deleteTravel={deleteTravel}
          />
        );
      })}
    </div>
  );
}
 32 changes: 32 additions & 0 deletions32  
src/components/TravelPlanCard.jsx
@@ -0,0 +1,32 @@
export default function TravelPlanCard({ plan, deleteTravel }) {
  function generateCostLabel(totalCost) {
    if (totalCost <= 350) {
      return <span className="Label">Great Deal</span>;
    } else if (totalCost >= 1500) {
      return <span className="Label">Premium</span>;
    }
  }

  return (
    <div className="TravelCard" key={plan.id}>
      <img src={plan.image} />
      <div className="travel-info">
        <h3>
          {plan.destination}, {plan.days} days
        </h3>
        <p>{plan.description}</p>
        <p>
          <b>Price:</b> {plan.totalCost} €
        </p>
        <div className="Labels">
          {generateCostLabel(plan.totalCost)}
          {plan.allInclusive && <span className="Label">All-inclusive</span>}
        </div>
        <div className="edit-travel">
          <button onClick={() => deleteTravel(plan.id)}>Delete</button>
          <button>♡</button>
        </div>
      </div>
    </div>
  );
}
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs