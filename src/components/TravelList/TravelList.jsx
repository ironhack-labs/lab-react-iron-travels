// ? styles
import "./TravelList.css";

// data
import travelPlansData from "./../../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function handleDelete(plan) {
    setTravelPlans(travelPlans.filter((pl) => pl.id !== plan.id));
  }

  return (
    <article className="travel-list">
      {travelPlans.map((plan) => {
        return (
          <article className="travel" key={plan.id}>
            <img
              className="travel__image"
              src={plan.image}
              alt={`photo of ${plan.destination}`}
            />
            <div className="travel__info">
              <h3 className="travel__title">
                {plan.destination} ({plan.days} days )
              </h3>

              <p className="travel__description">{plan.description}</p>
              <p className="travel__price">
                <span className="travel__price-name">Price: </span>
                {plan.totalCost} &euro;
              </p>

              <div className="travel__bonuses">
                {plan.totalCost >= 1500 ? (
                  <div className="travel__bonus">Premium</div>
                ) : (
                  plan.totalCost <= 350 && (
                    <div className="travel__bonus travel__bonus_bg_green">
                      Great Deal.
                    </div>
                  )
                )}
                {plan.allInclusive && (
                  <div className="travel__bonus">All-Inclusive</div>
                )}
              </div>

              <div className="travel__buttons">
                <button
                  onClick={() => handleDelete(plan)}
                  className="travel__button"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </article>
  );
}
