import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import { useState } from "react";
function TravelList() {
  const [travelDetails, setTravelDetails] = useState(travelPlansData);

  const handleDelete = (travelId) => {
    const filteredTravel = travelDetails.filter((item) => {
      return item.id !== travelId;
    });
    setTravelDetails(filteredTravel);
  };

  return (
    <div>
      {travelDetails.map((element) => {
        return (
          <div key={element.id} className="travel-card">
            <div>
              <img src={element.image} className="card-image"></img>
            </div>

            <div>
              <h3>{element.destination}</h3>
              <p className="description">{element.description}</p>
              <p>
                <strong>price:</strong> {element.totalCost} $
              </p>
              {element.totalCost < 350 ? (
                <p className="great-deal">Great Deal</p>
              ) : (
                <p></p>
              )}

              {element.totalCost > 1500 ? (
                <p className="premium-deal">Premium</p>
              ) : (
                <p></p>
              )}
              {element.allInclusive ? (
                <p className="all-inclusive">All-Inclusive</p>
              ) : (
                <p></p>
              )}
              <button onClick={() => handleDelete(element.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TravelList;
