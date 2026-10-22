import { useState } from "react";
import travelPlans from "../data/travel-plans.json";

function TravelList() {
  // Guardamos los viajes en el estado para poder modificarlos
  const [plans, setPlans] = useState(travelPlans);

  // Función para eliminar un plan por id
  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
  };

  return (
    <div>
      <h2>Available Travel Plans</h2>

      {plans.map((plan) => {
        let label = "";

        if (plan.totalCost <= 350) {
          label = "Great Deal";
        } else if (plan.totalCost >= 1500) {
          label = "Premium";
        }

        return (
          <div key={plan.id} className="travel-item">
            <h3>
              {plan.destination}{" "}
              {label && <span className="label">{label}</span>}
            </h3>

            <img
              src={plan.image}
              alt={plan.destination}
              width="250"
            />

            <p>{plan.description}</p>
            <p><strong>Days:</strong> {plan.days}</p>
            <p><strong>Total Cost:</strong> ${plan.totalCost}</p>

            {/* Delete button */}
            <button onClick={() => handleDelete(plan.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
