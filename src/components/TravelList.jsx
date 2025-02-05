import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import './TravelList.css';

function TravelList() {
  const [Travels, setTravel] = useState(travelPlansData);

  // Function to handle delete
  const handleDelete = (id) => {
    // Filter out the travel plan with the matching id
    const updatedTravels = Travels.filter((travel) => travel.id !== id);
    setTravel(updatedTravels); // Update state with the filtered array
  };

  return (
    <section className="TravelList">
      {Travels.map((travel) => {
        // Determine the labels based on totalCost and allInclusive
        let costLabel = "";
        if (travel.totalCost <= 350) {
          costLabel = "Great Deal";
        } else if (travel.totalCost >= 1500) {
          costLabel = "Premium";
        }

        // All Inclusive check
        const allInclusiveLabel = travel.allInclusive ? "All Inclusive" : "";

        return (
          <div className="travel-card" key={travel.id}>
            <img src={travel.image} alt={travel.destination} className="travel-image" />
            <div className="travel-details">
              <p className="destination">{travel.destination}</p>
              <p className="description">{travel.description}</p>
              <p className="price">Price: {travel.totalCost} €</p>
              <p className="labels">
                {/* Render the labels */}
                {costLabel && <span className="label">{costLabel}</span>}
                {allInclusiveLabel && <span className="label">{allInclusiveLabel}</span>}
              </p>
              {/* Delete button */}
              <button 
                onClick={() => handleDelete(travel.id)} 
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TravelList;
