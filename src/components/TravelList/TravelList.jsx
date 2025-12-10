import { useState } from "react";
import "./TravelList.css";
import Favorites from "../Favorite/Favorite";
import travelPlansData from "../../data/travel-plans.json";

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  const handleFavorite = (plan) => {
    const existingFavorite = favorites.find((fav) => fav.id === plan.id);

    if (existingFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== plan.id));
    } else {
      setFavorites([
        ...favorites,
        {
          ...plan,
          favoriteColor: colors[Math.floor(Math.random() * colors.length)],
        },
      ]);
    }
  };

  return (
    <div className="travel-container">
      <div className="travel-list">
        {plans.map((plan) => (
          <div key={plan.id} className="travel-plan">
            <img src={plan.image} alt={plan.destination} />
            <div className="plan-details">
              <h2>
                {plan.destination} ({plan.days} Days)
              </h2>
              <p>{plan.description}</p>
              <p>
                <strong>Price:</strong> {plan.totalCost} €
              </p>
              <div className="labels">
                {plan.totalCost <= 350 && (
                  <span className="label great-deal">Great Deal</span>
                )}
                {plan.totalCost >= 1500 && (
                  <span className="label premium">Premium</span>
                )}
                {plan.allInclusive && (
                  <span className="label all-inclusive">All-Inclusive</span>
                )}
              </div>
              <div className="button-group">
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(plan.id)}
                >
                  Delete
                </button>
                <button
                  className={`btn-favorite ${
                    favorites.find((fav) => fav.id === plan.id) ? "filled" : ""
                  }`}
                  onClick={() => handleFavorite(plan)}
                >
                  ♡
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {favorites.length > 0 && <Favorites favorites={favorites} />}
    </div>
  );
}

export default TravelList;
