import travelPlanData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

export default function TravelList() {
  return travelPlanData.map((plan) => {
    return (
      <div key={plan.id} className="cards">
        <TravelPlanCard card={plan} />
      </div>
    );
  });
}
