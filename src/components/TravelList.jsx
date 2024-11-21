import TravelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  /* const travelPlans = [...TravelPlansData]; */

  const [travelPlans, setTravelPlans] = useState(TravelPlansData);

  const deleteTravelPlan = (id) => {
    const filteredPlans = travelPlans.filter((plans) => {
      return plans.id !== id;
    });
    setTravelPlans(filteredPlans);
  };

  return travelPlans.map((place) => {
    return (
      <div className="container" key={place.id}>
        <div className="box">
          <img src={place.image} className="imgs" />

          <div className="infos">
            <h1>{place.destination}</h1>
            <p>{place.description}</p>
            <h3>
              <b>Price:</b> {place.totalCost} €{" "}
            </h3>

            {place.totalCost && place.totalCost <= 350 && (
              <label className="label greatDeal">Great Deal</label>
            )}
            {place.totalCost && place.totalCost >= 1500 && (
              <label className="label premium">Premium</label>
            )}
            {place.allInclusive && place.allInclusive && (
              <label className="label inclusive">All Inclusive</label>
            )}
            <div className="delete">
              <button onClick={() => deleteTravelPlan(place.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default TravelList;

/* 
const deleteTravelPlan = (id) => {
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== id;
    });
    setTravelPlans(filteredPlans);
  };


button onClick={() => deleteTravelPlan(place.id)}*/
