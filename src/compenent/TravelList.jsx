import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

const [travelList, setTravelList] = useState(travelPlansData);

const deletePlan = (id) => {
  const filteredList = travelList.filter((plan) => {
    return plan.id !== id;
  });

  setTravelList(filteredList);
};
    return (
        <div>
          {travelPlansData.map((plan) => {
            return (
                <div key={plan.id}>
                  <h2>{plan.destination}</h2>
                  <p>{plan.description}</p>
                  <p>Price:  €{plan.totalCost}</p>

                  {plan.totalCost <= 350 && <span>Great Deal</span>}
                  {plan.totalCost >= 1500 && <span>Premium</span>}
                  {plan.totalCost && <span>All Inclusive</span>}
                </div>  
            );
          })}
        </div>  
    );
}

export default TravelList;