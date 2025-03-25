import TravelPlanCard from "./TravelPlanCard";

export default function TravelList({plans, onDelete}){
    // Store data in a state which is a dynamic object so it can be changed later

    return (
        <div className="travel-list">
            {plans.map((plan) => (
            <TravelPlanCard key={plan.id} plan={plan} onDelete={onDelete} />
            ))}
        </div>
        
    )
}