import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedPlans = travelPlans.filter(plan => plan.id !== id);
    setTravelPlans(updatedPlans);
  };

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="card border p-4 mb-4 rounded shadow bg-white">
          <h2 className="text-xl font-bold">{plan.destination}</h2>
          <p><strong>Days:</strong> {plan.days}</p>
          <p><strong>Cost:</strong> ${plan.totalCost}</p>
          <p><strong>Season:</strong> {plan.season}</p>

          {/* Conditional Labels */}
          <div className="flex flex-wrap gap-2 mt-2">
            {plan.totalCost <= 350 && (
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-sm">Great Deal</span>
            )}
            {plan.totalCost >= 1500 && (
              <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-sm">Premium</span>
            )}
            {plan.allInclusive && (
              <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded text-sm">All Inclusive</span>
            )}
          </div>

          {/* Delete Button */}
          <button
            onClick={() => handleDelete(plan.id)}
            className="mt-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
