import React, { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const TravelList = () => {
  const [trips, setTrips] = useState(
    Array.isArray(travelPlansData) ? travelPlansData : []
  );

  useEffect(() => {
    console.log("TravelList mounted. trips length:", trips.length);
  }, [trips]);

  const handleDelete = (id) => {
    console.log("handleDelete called for id:", id);
    setTrips((prev) => prev.filter((p) => p.id !== id));
  };

  if (!trips) return <p>Loading...</p>;

  if (trips.length === 0) {
    return (
      <section
        style={{ maxWidth: 900, margin: "2rem auto", textAlign: "center" }}
      >
        <p>No travel plans available.</p>
        <pre style={{ textAlign: "left", maxHeight: 300, overflow: "auto" }}>
          {JSON.stringify(travelPlansData, null, 2)}
        </pre>
      </section>
    );
  }

  return (
    <section style={{ maxWidth: 900, margin: "2rem auto" }}>
      {trips.map((plan) => (
        <TravelPlanCard key={plan.id} plan={plan} onDelete={handleDelete} />
      ))}
    </section>
  );
};

export default TravelList;
