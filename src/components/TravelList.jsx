import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  const [destPlans, setDest] = useState(travelPlansData);

  const deletePlan = (planId) => {
    console.log(planId);
    const updatedPlans = destPlans.filter((plan) => plan.id !== planId);
    console.log(updatedPlans);
    setDest(updatedPlans);
  };

  return (
    <>
      <main className={"main"}>
        <p>Destinations</p>

        {destPlans.map((dest) => {
          return <TravelPlanCard key={dest.id} plan={dest} onDelete={deletePlan} />;
          {
            /* <div key={dest.id} className={"box"}>
              <div>
                <img className={"dest-img"} src={dest.image} />
              </div>
              <div className={"info"}>
                <h3>
                  {dest.destination} ({dest.days} days)
                </h3>
                <p>{dest.description}</p>
                <p>
                  <strong>Price</strong> : {dest.totalCost} euro{" "}
                </p>
                <div className={"deals"}>
                  {(dest.totalCost < 350 ? true : false) && <p id={"deal"}>Deal Available!</p>}
                  {(dest.totalCost > 1500 ? true : false) && <p id={"premium"}>Premium!</p>}{" "}
                  {dest.allInclusive && <p id={"allInc"}>All Inclusive!</p>}
                </div>
                <button onClick={() => deletePlan(dest.id)} id={"delete"}>
                  Delete
                </button>
              </div>
            </div> */
          }
        })}
      </main>
    </>
  );
}
