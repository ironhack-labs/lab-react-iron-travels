import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelCard";

export default function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  const handleDelete = (id) => {
    setTravels(travels.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel List</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {travels.map((plan) => (
          <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
