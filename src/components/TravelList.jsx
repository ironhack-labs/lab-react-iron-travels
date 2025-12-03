import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";


function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);

  const deleteTravel = (travelId) => {
    const NewList = travels.filter((travelDetails) => {
        if (travelDetails.id !== travelId){
            return true;
        } else {
            return false;
        }
    })

    setTravels(NewList)
  }


  return (
    <div> 
      {travels.map((travelObj) => {
        let costLabel = "";

        if (travelObj.totalCost <= 350) costLabel = "Great Deal";
        else if (travelObj.totalCost >= 1500) costLabel = "Premium";

        return (
          <div key={travelObj.id} className="card">
            <img src={travelObj.image} alt={travelObj.destination} />
            <h2>{travelObj.destination} ({travelObj.days} Days)</h2>
            <p>{travelObj.description}</p>
            <p><strong>Price:</strong> {travelObj.totalCost} €</p>

            <div className="labels-container">
              {costLabel && <span className="cost-label">{costLabel}</span>}
              {travelObj.allInclusive && (
                <span className="all-inclusive-label">All Inclusive</span>
              )}

              
            </div>
            <button className="deleteButton" onClick={() => { deleteTravel(travelObj.id) }}>Delete</button>
          </div>
          
        );
      })}
    </div>
  );
}

export default TravelList;
