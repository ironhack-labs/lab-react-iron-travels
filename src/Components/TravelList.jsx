import React, { useState } from "react";
import TravelPlans from "../assets/TravelPlans.json";

const TravelList = () => {
  // State to store the travel plans data using the useState hook
  const [travelPlans, setTravelPlans] = useState(TravelPlans);

  // Delete function
  const handleDelete = (id) => {
    // Filter out the travel plan with the specified id
    const filteredTrips = travelPlans.filter((trip) => trip.id !== id);
    // Update the state with the filtered trips
    setTravelPlans(filteredTrips);
  };

  // Return JSX structure for rendering the TravelList component
  return (
    <div>
      {/* Heading displaying the title of the Travel Plans List */}
      <h2>Travel Plans List</h2>

      {/* Render an unordered list of travel plans */}
      <ul>
        {/* Map through each travel plan in the state and render a list item for each */}
        {travelPlans.map((plan) => (
          <div key={plan.id}>
            {/* Display details of each travel plan, including destination, duration, and cost */}
            <img
              src={plan.image}
              alt={plan.destination}
              style={{ height: "200px" }}
            />
            <h2>
              {plan.destination} - Duration: {plan.days} days,
            </h2>{" "}
            Cost: $
            {plan.parts.reduce((totalCost, part) => totalCost + part.cost, 0)}
            {plan.totalCost < 350 ? <button>Great Deal</button> : null}
            {plan.totalCost < 1500 && <button> Premium</button>}
            <button onClick={() => handleDelete(plan.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

// Export the TravelList component as the default export
export default TravelList;
