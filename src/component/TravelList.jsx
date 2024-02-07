import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travels, setTravel] = useState(travelPlansData);

  const deleteTravel = (id) => {
    // Filter out the travel plan with the specified id
    const updatedTravels = travels.filter((travel) => travel.id !== id);
    // Update the state with the filtered travel plans
    setTravel(updatedTravels);
  };

  return (
    <div className="travelDiv">
      <h2>Travel List</h2>
      {travels.map((travel) => {
        return (
          <div
            style={{ 
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            border: "solid" ,
            width: "600px",
            height: "251px" ,
            margin: "20px",

            }}
            key={travel.id}
            className="travelId"
          >
            <img
              style={{
                justifyContent: "left",
                border: "1px solid",
                width: "250px",
                height: "250px",
                alignItems: "center",
              }}
              className="travelimg"
              src={travel.image}
              alt={`Travel to ${travel.destination}`}
            />

            <spam style={{
                alignItems: "left" ,
                margin: "20px" ,
                textAlign: "left"
            }}>
                <h3>{travel.destination} ({travel.days} days)</h3>
                <p>{travel.description}</p>
                <p><b>Price:</b>{travel.totalCost}$</p>
                {travel.allInclusive && <p>ALL INCLUSIVE</p>}

                <button onClick={() => deleteTravel(travel.id)} className="btn-delete">Delete</button>
            </spam>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
