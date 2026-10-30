import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

const favoriteColors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelList() {
  const [plans, setPlans] = useState(travelPlansData);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteColorIndexes, setFavoriteColorIndexes] = useState({});

  function deletePlan(planId) {
    setPlans((currentPlans) => currentPlans.filter((plan) => plan.id !== planId));
    setFavoriteIds((currentIds) => currentIds.filter((id) => id !== planId));
  }

  function toggleFavorite(planId) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(planId)
        ? currentIds.filter((id) => id !== planId)
        : [...currentIds, planId],
    );
    setFavoriteColorIndexes((currentIndexes) => ({
      ...currentIndexes,
      [planId]: ((currentIndexes[planId] ?? -1) + 1) % favoriteColors.length,
    }));
  }

  const favorites = plans.filter((plan) => favoriteIds.includes(plan.id));

  return (
    <div className="travel-layout">
      <section className="plans-section" aria-labelledby="plans-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FIND YOUR WAY</p>
            <h2 id="plans-heading">Explore travel plans</h2>
          </div>
          <span className="plan-count">
            {plans.length} {plans.length === 1 ? "trip" : "trips"}
          </span>
        </div>

        {plans.length > 0 ? (
          <div className="plans-grid">
            {plans.map((plan) => (
              <TravelPlanCard
                key={plan.id}
                plan={plan}
                onDelete={deletePlan}
                onToggleFavorite={toggleFavorite}
                isFavorite={favoriteIds.includes(plan.id)}
                favoriteColor={favoriteColors[favoriteColorIndexes[plan.id]]}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">All trips are cleared. Your next adventure awaits!</p>
        )}
      </section>

      <aside className="favorites-section" aria-labelledby="favorites-heading">
        <div className="section-heading favorites-heading">
          <div>
            <p className="eyebrow">SAVED FOR LATER</p>
            <h2 id="favorites-heading">Favorites</h2>
          </div>
          <span className="favorite-count">{favorites.length}</span>
        </div>

        {favorites.length > 0 ? (
          <div className="favorites-list">
            {favorites.map((plan) => (
              <TravelPlanCard
                key={plan.id}
                plan={plan}
                onDelete={deletePlan}
                onToggleFavorite={toggleFavorite}
                isFavorite
                favoriteColor={favoriteColors[favoriteColorIndexes[plan.id]]}
                compact
              />
            ))}
          </div>
        ) : (
          <div className="favorites-empty">
            <span className="empty-heart" aria-hidden="true">
              ♡
            </span>
            <p>Your favorite trips will show up here.</p>
          </div>
        )}
      </aside>
    </div>
  );
}

export default TravelList;
