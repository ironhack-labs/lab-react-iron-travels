import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  const deleteTravel = (travelId) => {
    const filteredList = travels.filter((travel) => {
      return travel.id !== travelId;
    });
    setTravels(filteredList);
  };
  const getCostLabel = (totalCost, allInclusive) => {
    let labels = [];
    if (allInclusive) {
      labels.push(<label className="AllInclusiveLabel">All Inclusive</label>);
    }
    if (totalCost <= 350) {
      labels.push(<label className="GreatDealLabel">Great Deal</label>);
    } else if (totalCost >= 1500) {
      labels.push(<label className="PremiumLabel">Premium</label>);
    }
    return labels.length > 0 ? (
      labels
    ) : (
      <label className="StandardLabel">Standard</label>
    );
  };

  return travels.map((travel) => (
    <div className="destination-card" key={travel.id}>
      <h3>{travel.destination}</h3>
      <div className="card-content">
        <img src={travel.image} alt={travel.id} />
        <p>{travel.description}</p>
        <p>
          <b>Price:</b> {travel.totalCost} €
          {travel.allInclusive && (
            <span>
              {" "}
              - {getCostLabel(travel.totalCost, travel.allInclusive)}
            </span>
          )}
        </p>
        <p>{getCostLabel(travel.totalCost, travel.allInclusive)}</p>
        <button onClick={() => deleteTravel(travel.id)}>Delete</button>
      </div>
    </div>
  ));
}
