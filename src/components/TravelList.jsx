
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import { useState } from "react";

const TravelList = () => {

    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const updateTravelPlans = (id) => {

        console.log("Deleting travel plan with id:", id);

        const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
        console.log("Updated travel plans:", updatedPlans);
        setTravelPlans(updatedPlans);
    }

    return (
        <section className="travel-list">
            {travelPlans.map((travelPlan) => {
                return (
                    <div key={travelPlan.id} className="travel-card">
                        <img src={travelPlan.image} alt={travelPlan.destination} />
                        <div className="travel-info">
                            <h3>
                                {travelPlan.destination} ({travelPlan.days} Days)
                            </h3>
                            <p>{travelPlan.description}</p>
                            <p className="travel-price">
                                Price: <span>{travelPlan.totalCost} &euro;</span>
                            </p>

                            {(travelPlan.totalCost < 350) 
                                && <p className="travel-label"> Great Deal </p>
                            } 
                            {(travelPlan.totalCost > 1500)
                                && <p className="travel-label-premium"> Premium Experience </p>
                            }

                            { (travelPlan.allInclusive) && 
                                <p className="travel-label-all-inclusive"> All Inclusive </p>
                            }

                            <button className="delete-button" 
                                onClick={() => updateTravelPlans(travelPlan.id)}    
                            >🗑️ Delete</button>
                            
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default TravelList;
