import React, { useState } from "react";
import TravelPlansData from "../assets/travel-plans.json";
import DeleteButton from "./DeleteButton";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(TravelPlansData);
  const [favorites, setFavorites] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const getLabel = (plan) => {
    const labels = [];
    if (plan.totalCost <= 350) {
      labels.push(<span className="label great-deal">Great Deal</span>);
    }

    if (plan.totalCost >= 1500) {
      labels.push(<span className="label premium">Premium</span>);
    }

    if (plan.allInclusive) {
      labels.push(<span className="label all-inclusive">All Inclusive</span>);
    }
    return labels;
  };

  const removeTravelPlan = (id) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== id));
  };

  const toggleFavorite = (plan) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(plan)) {
        return currentFavorites.filter((fav) => fav.id !== plan.id);
      } else {
        return [...currentFavorites, plan];
      }
    });
  };

  const isFavorite = (plan) => favorites.some((fav) => fav.id === plan.id);

  return (
    <div className="travel-list">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="travel-plan">
          <img
            src={plan.image}
            alt={plan.destination}
            className="travel-image"
          />
          <h2>{plan.destination}</h2>
          {getLabel(plan).map((label, index) => (
            <React.Fragment key={index}>{label}</React.Fragment>
          ))}
          <p>{plan.description}</p>
          <div className="travel-info">
            <span>{plan.days} days</span>
            <span>
              {plan.allInclusive ? "All-inclusive" : "Excludes meals & tickets"}
            </span>
            <span>Price: ${plan.totalCost}</span>
          </div>
          <DeleteButton onDelete={() => removeTravelPlan(plan.id)} />
          <button
            onClick={() => {
              toggleFavorite(plan);
              setColorIndex(
                (currentIndex) => (currentIndex + 1) % colors.length
              );
            }}
            style={{
              backgroundColor: isFavorite(plan)
                ? colors[colorIndex]
                : "initial",
            }}
          >
            ♡
          </button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
