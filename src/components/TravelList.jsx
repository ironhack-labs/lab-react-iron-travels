import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favPlans, setFavPlans] = useState([]);

  function handleDelete(id) {
    setPlans(plans.filter((plan) => plan.id !== id));
  }

  function handleFav(plan) {
    setFavPlans([...favPlans, plan]);

    setPlans(plans.filter((p) => p.id !== plan.id));
  }

  return (
    <div className="travel-container" style={{ display: "flex", gap: "2rem" }}>
      <div className="travel-list">
        <ul>
          {plans.map((plan) => (
            <div key={plan.id}>
              <TravelPlanCard plan={plan} />
              <button
                onClick={() => handleDelete(plan.id)}
                className="delete-btn"
              >
                Delete
              </button>
              <button onClick={() => handleFav(plan)}>♡</button>
            </div>
          ))}
        </ul>
      </div>
      <div className="fav-list">
        <h3>Favorites</h3>
        {favPlans.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          <ul>
            {favPlans.map((plan) => (
              <div key={plan.id}>
                <TravelPlanCard plan={plan} />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TravelList;
