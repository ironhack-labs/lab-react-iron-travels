import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const removeCard = (id) => {
    const filteredPlans = travelPlans.filter(
      (travelPlan) => travelPlan.id !== id
    );
    setTravelPlans(filteredPlans);
  };

  return (
    <section>
      {travelPlans.map((travelPlan) => (
        <div className="TravelList" key={travelPlan.id}>
          <img src={travelPlan.image} alt={travelPlan.destination} />
          <br />
          <h2>{travelPlan.destination}</h2>
          <br />
          <p>{travelPlan.description}</p>
          <p>Price: {travelPlan.totalCost} €</p>
          <br />
          {(travelPlan.totalCost <= 350 ||
            travelPlan.totalCost >= 1500 ||
            travelPlan.allInclusive) && <p>Great Deal</p>}
          <button onClick={() => removeCard(travelPlan.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}
