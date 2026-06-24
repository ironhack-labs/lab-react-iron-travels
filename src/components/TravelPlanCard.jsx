import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "purple",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const addToFavorites = (plan) => {
    const alreadyFavorite = favorites.find(
      (fav) => fav.id === plan.id
    );

    if (!alreadyFavorite) {
      setFavorites([...favorites, plan]);
    }

    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div style={{ display: "flex", gap: "50px" }}>
      
      {/* Travel Plans */}
      <div>
        <h2>Travel Plans</h2>

        {plans.map((plan) => (
          <div key={plan.id}>
            <h3>{plan.destination}</h3>

            <img
              src={plan.image}
              alt={plan.destination}
              width="250"
            />

            <p>{plan.description}</p>

            <p>Days: {plan.days}</p>

            <p>Total Cost: ${plan.totalCost}</p>

            {/* Cost Labels */}
            {plan.totalCost <= 350 && (
              <p>Great Deal</p>
            )}

            {plan.totalCost >= 1500 && (
              <p>Premium</p>
            )}

            {plan.allInclusive && (
              <p>All Inclusive</p>
            )}

            <button
              onClick={() => deletePlan(plan.id)}
            >
              Delete
            </button>

            <button
              onClick={() => addToFavorites(plan)}
              style={{
                backgroundColor: colors[colorIndex],
                marginLeft: "10px",
              }}
            >
              ♡
            </button>

            <ul>
              {plan.parts.map((part, index) => (
                <li key={index}>
                  {part.name} - ${part.cost}
                </li>
              ))}
            </ul>

            <hr />
          </div>
        ))}
      </div>

      {/* Favorites */}
      <div>
        <h2>Favorites</h2>

        {favorites.map((plan) => (
          <div key={plan.id}>
            <h3>{plan.destination}</h3>

            <p>Total Cost: ${plan.totalCost}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TravelList;