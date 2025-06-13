import { useState } from "react";
import TravelCard from "./TravelCard";
import travelPlans from "../assets/travel-plans.json";

export default function TravelList() {
  const [travels, setTravels] = useState(travelPlans);
  const [toggle, setToggle] = useState(false);

  const handleDelete = (id) => {
    setTravels(travels.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel List</h2>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        onClick={() => setToggle(!toggle)}
      >
        {travels.map((plan) => (
          <div
            style={{
              display: "flex",
              border: "1px solid white",
            }}
            key={plan.id}
          >
            <TravelCard
              plan={plan}
              handleDelete={handleDelete}
              toggle={toggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
