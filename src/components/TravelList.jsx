import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import "./TravelList.css"

function TravelList() {
    const [plans, setPlans] = useState(travelPlansData);

    function deletePlan(plan) {
        let updatedPlans = plans.filter(otherPlan => {
            return otherPlan.id !== plan.id;
        })

        setPlans(updatedPlans);
    }

    return (
        <>
        <div className="container">
            {plans.map((plan) => {
                let labels = [];

                if (plan.totalCost <= 350) {
                    labels.push(<div className="great-deal-label">Great Deal</div>)
                }
                else if (plan.totalCost >= 1500) {
                    labels.push(<div className="label">Premium</div>)
                }

                if (plan.allInclusive) {
                    labels.push(<div className="label">All Inclusive</div>)
                }


                return (
                    <div className="plan-container">
                        <div className="image-container">
                            <img src={plan.image} alt=""/>
                        </div>
                        <div>
                            <h2>{plan.destination} ({plan.days} days)</h2>
                            <p>{plan.description}</p>
                            <p><strong>Price:</strong> {plan.totalCost}€</p>
                            <div className="labels-container">
                                {labels}
                            </div>
                            <button className="delete-button" onClick={() => deletePlan(plan)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export { TravelList };