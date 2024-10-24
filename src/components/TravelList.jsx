import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deleteTravel = (travelId) => {
        const newArray = travelPlans.filter(plan => {
            if(plan.id === travelId) {
                return false;
            } else {
                return true;
            }
        });
        setTravelPlans(newArray);
    }

    return (
        <div className="TravelList">
            
            <div>
                {travelPlans.map((plan) => (
                    <div key={plan.id} className="card">
                        <img src={plan.image} className="destination-image"/>
                        <h2>{plan.destination} ({plan.days} days)</h2>
                        <p><em>{plan.description}</em></p>
                        <p>Cost: ${plan.totalCost}</p>

                        <div>
                        {plan.totalCost <= 350 && (
                            <span className="gdeal">Great Deal</span>
                        )}
                        
                        {plan.totalCost >= 1500 && (
                            <span className="premiumdeal">Premium</span>
                        )}

                        {plan.allInclusive && (
                            <span className="all-inclusive">All Inclusive</span>
                        )}
                      
                        
                        </div>

                        <p>
                            <button onClick={() => {deleteTravel(plan.id)}}>Delete travel</button>
                        </p>

                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TravelList;