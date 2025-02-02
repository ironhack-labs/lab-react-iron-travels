
import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function deletePlan(id) {
    setTravelPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
  }

  return (
    <div>
      {travelPlans.length === 0 ? (
        <p>No travel plans available.</p>
      ) : (
        <ul id="listOfDestinations">
          {travelPlans.map((plan) => (
            <li key={plan.id} className="destinationCard">
              <img src={plan.image} alt="Picture of the destination" />
              <div>
                <h3 id="destinationTitle">
                  {plan.destination} ({plan.days} days)
                </h3>
                <p id="destinationDescription">{plan.description}</p>
                <p>
                  <strong>Price: </strong>
                  {plan.totalCost} €
                </p>
                <div id="labelDiv">
                  {plan.totalCost <= 350 && (
                    <label id="greatDealLabel">
                      <strong>Great Deal</strong>
                    </label>
                  )}
                  {plan.totalCost >= 1500 && <label className="bluelabel">Premium</label>}
                  {plan.allInclusive && <label className="bluelabel">All Inclusive</label>}
                </div>
                <button id="deleteBTN" onClick={() => deletePlan(plan.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TravelList;
