import travelPlansData from "../data/travel-plans.json";
import { useState } from "react";

function TravelList() {

    const [destinations, setDestinations] = useState(travelPlansData)

    const deleteTravels = (travelId) => {
        const newTravelList = destinations.filter((travelPlan) => travelPlan.id !== travelId)

        setDestinations(newTravelList)
    }




  // Funzione semplice per la label
  const greatDeal = (cost) => {
    return cost <= 350 ? "Great Deal" : "Premium";
  };

  return (
    <div>
      <h1>Travel Plans</h1>

      {destinations.map((destinationObj) => (
        <div
          style={{ border: "1px solid black", margin: "5px" }}
          key={destinationObj.id}
          className="card"
        >
          <h3>{destinationObj.destination}</h3>
          <span
            style={{
              backgroundColor: "#ffd700",
              color: "#222",
              padding: "2px 8px",
              borderRadius: "8px",
              marginLeft: "10px",
              fontWeight: "bold",
            }}
          >
            {greatDeal(destinationObj.totalCost)}
          </span>
          <img src={destinationObj.image} alt="" />
          <p>{destinationObj.description}</p>
          <p>
            <b>Price: {destinationObj.totalCost} euro</b>
          </p>

          <p>
            <button onClick={() => {deleteTravels(destinationObj.id)}} style={{border:'1px solid black'}}>Delete Travel</button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
