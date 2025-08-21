import React from "react";

function TravelPlanCard({ plan }) {
    return (
        <div className="travel-plan">
            <h2>
                {plan.destination}
                <button>
                    {plan.totalCost <= 350 && (
                        <span className="ml-2 px-2 py-1 text-xs rounded bg-green-100 text-green-800 align-middle">Great Deal</span>
                    )}
                    {plan.totalCost >= 1500 && (
                        <span className="ml-2 px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800 align-middle">Premium</span>
                    )}
                </button>
            </h2>
            <img src={plan.image} alt={plan.destination} />
            <p>{plan.description}</p>
            <p>Total Cost: {plan.totalCost}</p>
            <p>Days: {plan.days}</p>
            <p>All Inclusive: {plan.allInclusive ? "Yes" : "No"}</p>
        </div>
    );
}

export default TravelPlanCard;


