import React from 'react'
import { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";




function TravelList() {
    const [planToDisplay, setPlanToDisplay] = useState(travelPlansData);

    const deletePlan = (planId) => {
        const newPlanToDisplay = planToDisplay.filter(plan => plan.id !== planId);
        setPlanToDisplay(newPlanToDisplay);
    }
    const renderLabels = (totalCost, allInclusive) => {
        return (
            <div>
                {totalCost <= 350 && <span className="labelStyle greatDeal">Great Deal</span>}
                {totalCost >= 1500 && <span className='labelStyle premium'>Premium</span>}
                {allInclusive && <span className='labelStyle allInclusive'>All Inclusive</span>}
            </div>
        );
    };

    return (
        <div>
            {planToDisplay.map((travelPlanObj) => {
                return (
                    <div key={travelPlanObj.id} className='box'>
                        <img src={travelPlanObj.image} alt={travelPlanObj.id} className='image' />
                        <h2>{travelPlanObj.destination} ({travelPlanObj.days} Days)</h2>
                        <p><strong>Price: </strong>  {travelPlanObj.totalCost} €</p>
                        <div>
                            {renderLabels(travelPlanObj.totalCost, travelPlanObj.allInclusive)}
                            <button onClick={() => deletePlan(travelPlanObj.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default TravelList;