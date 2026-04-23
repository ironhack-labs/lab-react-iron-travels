import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"; //

// --- LE NOUVEAU COMPOSANT (L'ENFANT) ---
// On extrait juste la partie visuelle d'une carte ici
function TravelPlanCard({ plan, onDelete }) {
  return (
    <div
      className="travel-card"
      style={{ margin: "10px", display: "flex", padding: "10px", border: "1px solid #eee" }}
    >
      <img
        src={plan.image}
        alt={plan.destination}
        style={{ width: "80px", height: "80px" }}
      />

      <div className="travel-info" style={{ marginLeft: "20px" }}>
        <h2>{plan.destination} ({plan.days} Days)</h2>
        <p><em>{plan.description}</em></p>
        <p><strong>Price:</strong> {plan.totalCost} €</p>

        {/* Tes badges d'origine */}
        {plan.totalCost <= 350 && (
          <span style={{ background: "lightgreen", color: "white", padding: "5px", marginRight: "5px" }}>
            Great Deal
          </span>
        )}
        {plan.totalCost >= 1500 && (
          <span style={{ background: "blue", color: "white", padding: "5px" }}>
            Luxury
          </span>
        )}
        {plan.allInclusive && (
          <span style={{ background: "green", color: "white", padding: "5px", marginLeft: "5px" }}>
            All Inclusive
          </span>
        )}

        <div style={{ marginTop: "10px" }}>
          <button onClick={() => onDelete(plan.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

// --- TON COMPOSANT PRINCIPAL (LE PARENT) ---
function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (idToDelete) => {
    const updatedPlans = plans.filter((plan) => plan.id !== idToDelete);
    setPlans(updatedPlans);
  };

  return (
    <div className="travel-list-container">
      {plans.map((plan) => (
        /* On appelle TravelPlanCard en lui passant :
           1. Les données du voyage (plan)
           2. La fonction pour supprimer (onDelete)
        */
        <TravelPlanCard 
          key={plan.id} 
          plan={plan} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default TravelList;