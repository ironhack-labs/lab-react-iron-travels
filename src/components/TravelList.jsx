import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  
  const deleteTravel = (id) => {
    setTravels(travels.filter(travel => travel.id !== id));
  };
  

  return (
    <div className="travel-list-container">
      {travels.map((travel) => (
        <div key={travel.id} className="travel">
          <img width="100px" src={travel.image} alt="city" />
          <h2>{travel.destination} ({travel.days} days)</h2>
          <div>{travel.description}</div>
          <div>Price: {travel.totalCost}€</div>

          
          {travel.totalCost <= 350 && <label id="deal">Great Deal!</label>}
          {travel.totalCost >= 1500 && <label id="premium">Premium</label>}
          {travel.allInclusive && <label id="allInclusive">All inclusive!</label>}

          
          <button onClick={() => deleteTravel(travel.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
