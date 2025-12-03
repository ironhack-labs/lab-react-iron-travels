import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [plansToDisplay, setPlansToDisplay] = useState(travelPlansData);

  const deletePlan = (planId) => {
    const newList = plansToDisplay.filter((element) => element.id !== planId);
    setPlansToDisplay(newList);
  };

  return (
    <>
      {plansToDisplay.map((element) => {
        const costLabel =
          element.totalCost <= 350
            ? "Great Deal"
            : element.totalCost >= 1500
            ? "Premium"
            : undefined;

        return (
          <div key={element.id} className="card">
            <img className="photo" src={element.image} alt="City Monument" />

            <div className="card-content">
              <h2>
                {element.destination} ({element.days} Days)
              </h2>
              <p>{element.description}</p>
              <p>Price: {element.totalCost} €</p>

              {/* Labels */}
              <div className="labels">
                {costLabel && <p className="label">{costLabel}</p>}
                {element.allInclusive && (
                  <p className="label inclusive">All Inclusive</p>
                )}
              </div>

              <button onClick={() => deletePlan(element.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TravelList;
