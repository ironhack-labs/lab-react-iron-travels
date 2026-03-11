import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelPlanCard() {
  const [travelData, settravelData] = useState(travelPlansData);

  const deleteTravel = (id) => {
    const newData = travelData.filter((travel) => {
      return travel.id !== id;
    });
    settravelData(newData);
  };

  return (
    <>
      {travelData.map((travel) => {
        return (
          <div key={travel.id} className="travel-card">
            <img src={travel.image} alt="travel image" />

            <div className="travel-content">
              <h2>
                {travel.destination} {`(${travel.days} Days)`}
              </h2>
              <p>{travel.description}</p>
              <p>
                <span>Price:</span> {travel.totalCost}€
              </p>
              <div className="labels">
                <p>
                  {travel.totalCost <= 350 ? (
                    <span className="great-deal">Grear Deal</span>
                  ) : (
                    ""
                  )}

                  {travel.totalCost >= 1500 ? (
                    <span className="premium">Premium</span>
                  ) : (
                    ""
                  )}

                  {travel.allInclusive ? (
                    <span className="all-inclusive">All-inclusive</span>
                  ) : (
                    ""
                  )}
                </p>

                <button
                  onClick={() => deleteTravel(travel.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TravelPlanCard;
