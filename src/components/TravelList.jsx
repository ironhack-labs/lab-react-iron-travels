import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const FAVORITE_COLORS = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [favoriteClicks, setFavoriteClicks] = useState({});

  const handleDelete = (id) => {
    setPlans((previousPlans) => previousPlans.filter((plan) => plan.id !== id));
    setFavorites((previousFavorites) =>
      previousFavorites.filter((plan) => plan.id !== id)
    );
  };

  const handleFavorite = (plan) => {
    setFavoriteClicks((previousClicks) => ({
      ...previousClicks,
      [plan.id]: (previousClicks[plan.id] ?? 0) + 1,
    }));

    setFavorites((previousFavorites) => {
      const alreadyFavorite = previousFavorites.some(
        (favorite) => favorite.id === plan.id
      );
      return alreadyFavorite ? previousFavorites : [...previousFavorites, plan];
    });
  };

  const favoriteColor = (id) =>
    FAVORITE_COLORS[(favoriteClicks[id] ?? 0) % FAVORITE_COLORS.length];

  return (
    <div className="travel-layout">
      <section className="travel-main">
        <ul className="travel-list">
          {plans.map((plan) => (
            <li key={plan.id} className="travel-plan">
              <TravelPlanCard plan={plan} />

              <div className="travel-plan-actions">
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(plan.id)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-favorite"
                  style={{ backgroundColor: favoriteColor(plan.id) }}
                  onClick={() => handleFavorite(plan)}
                >
                  ♡
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="travel-favorites">
        <h2 className="text-iron">Favorites</h2>

        {favorites.length === 0 ? (
          <p className="travel-empty">No favorites yet.</p>
        ) : (
          <ul className="travel-list">
            {favorites.map((plan) => (
              <li key={plan.id} className="favorite-card">
                <img
                  className="favorite-image"
                  src={plan.image}
                  alt={plan.destination}
                />
                <h4 className="favorite-title">
                  {plan.destination} ({plan.days} Days)
                </h4>
                <p className="favorite-price">{plan.totalCost} €</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default TravelList;
