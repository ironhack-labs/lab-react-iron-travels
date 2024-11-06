import travelPlansData from "../assets/travel-plans.json";
import PlanCard from "./PlanCard";

const TravelList = () => {
  return (
    <div className="travel-list">
      {travelPlansData.map((plan) => {
        return <PlanCard key={plan.id} plan={plan} />;
      })}
    </div>
  );
};
export default TravelList;
