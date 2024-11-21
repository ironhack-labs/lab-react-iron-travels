import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    function getTravelLabel(price) {
        if (price <= 350) {
            return <div className="great-deal-label">Great Deal</div>
        }
        if (price >= 1500) {
            return <div className="premium-label">Premium</div>
        }
    }
    function checkAllInclusive(check) {
        if (check) {
            return <div className="all-inclusive-label">All-Inclusive</div>
        }
    }

    function deletePlan(id) {
        setTravelPlans(travelPlans.filter(plan => plan.id !== id));
    }

    return (
        travelPlans.map((plan) => {
            return (
                <div key={plan.id} className="travel-card">
                    <div className="travel-img-container">
                        <img className="travel-img" src={plan.image} />
                    </div>
                    <div className="info-container">
                        <div className="travel-destination">{plan.destination} ({plan.days} Days)</div>
                        <div className="travel-description">{plan.description}</div>
                        <div className="travel-price"><span>Price:</span> {plan.totalCost}</div>
                        <div className="labels-container">{getTravelLabel(plan.totalCost)}{checkAllInclusive(plan.allInclusive)}</div>

                        <button className="delete-btn" onClick={() => { deletePlan(plan.id) }}>Delete</button>
                    </div>
                </div>
            )
        })
    )
}