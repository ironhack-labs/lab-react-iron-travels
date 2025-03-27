import { useState } from "react";
import travelPlansData from "../data/travel-plans.json";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  // Función para eliminar un viaje
  const deletePlan = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <strong>{plan.destination}</strong> - ${plan.totalCost}
            {/* Etiquetas de "Great Deal" y "Premium" */}
            {plan.totalCost <= 350 && <span> 🏷️ Great Deal</span>}
            {plan.totalCost >= 1500 && <span> 🌟 Premium</span>}
            {/* Etiqueta de "All Inclusive" */}
            {plan.allInclusive && <span> ✈️ All Inclusive</span>}
            {/* Botón para eliminar el viaje */}
            <button onClick={() => deletePlan(plan.id)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
