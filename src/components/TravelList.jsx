import travelData from "../assets/data/travel-plans.json";
import { useState } from "react";
import TravelCard from "./TravelCard";
import '../components/TravelList.css'

function TravelList() {
  const [travelsPlans, settravelsPlans] = useState(travelData);

  function setLabel() {
    if (totalCost < 350) {
      return <label className="deal-tag">Great Deal</label>
    } else if (totalCost >= 1500) {
        return <label className="premium-tag">Premium</label>
      }
    }

    return (
      <div className="travel-container">
      <div className="travels">
        {travelsPlans.map((travel) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
        </div>
      </div>
    );
  }

  export default TravelList;
