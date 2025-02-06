import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
  const [travelPlans, setPlans] = useState(travelPlansData);

  const deletePlan = (planId) => {
    setPlans(travelPlans.filter((plan) => plan.id !== planId));
  };

  return (
    <div className="travel-list-container">
      {travelPlans.map((travelPlan) => {
        return (
          <div className="travel-list" key={travelPlan.id}>
            <img src={travelPlan.image} alt={travelPlan.destination} />
            <aside className="travel-info">
              <h2>
                {travelPlan.destination} ({travelPlan.days} Días)
              </h2>
              <i>{travelPlan.description}</i>
              <br />
              <strong>Precio: {travelPlan.totalCost}€</strong>
              <div className="travel-list-label">
                {travelPlan.totalCost <= 350 ? (
                  <label className="label-costo">Great Deal</label>
                ) : (
                  <label className="label-inclusive">Premium</label>
                )}
                {travelPlan.allInclusive && (
                  <label className="label-inclusive">All Inclusive</label>
                )}
                <div className="container-btn-delete">
                  <button
                    className="btn btn-primary"
                    onClick={() => deletePlan(travelPlan.id)} // Aqui pasamos el id del plan
                  >
                    Delete
                  </button>
                </div>
              </div>
            </aside>
          </div>
        );
      })}
    </div>
  );
}