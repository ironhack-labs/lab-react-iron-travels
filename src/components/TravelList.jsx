import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    const [travels, setTravels] = useState(travelPlansData)

    // function for cost label    
    const getCost = (totalCost) => {
        if (totalCost <= 350) return "Great Deal";
        if (totalCost >= 1500) return "Premium";
        return null; // just for default
    }

    return (
        <div>
            {travels.map((currentPlan) => {
                const costLabel = getCost(currentPlan.totalCost);

                return (
                    <div key={currentPlan.id} id="main-container">
                        <img src={currentPlan.image} alt={currentPlan.destination} />
                        <div id="text-container">
                            <h3>{currentPlan.destination} ({currentPlan.days} Days)</h3>
                            <p>{currentPlan.description}</p>
                            <p>Price: {currentPlan.totalCost}€</p>

                            {/* Labels container or just this line: plan.allExclusive && <span>All Exclusive</span>*/}
                            <div className="labels-container">
                                {costLabel && (
                                    <span className="label cost-label">{costLabel}</span>
                                )}
                                {currentPlan.allInclusive && (
                                    <span className="label inclusive-label">All Inclusive</span>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TravelList
