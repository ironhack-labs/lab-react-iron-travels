import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {

const [plans, setPlans] = useState(travelPlansData);

const deleteItem = (id) => {
const updatedPlans = plans.filter( plan => plan.id !== id);
    setPlans(updatedPlans);
}

    return (
        <>
        {plans.map(plan => {
            return (
                <div className="plan-container" key={plan.id}>
                    <img src={plan.image} alt={plan.destination} />
                    <div className="text-container">
                        <h2>{plan.destination}</h2>
                        <p><i>{plan.description}</i></p>
                        <p><b>Price:</b> {plan.totalCost} €</p>
                        {plan.totalCost <=350 ? <span className="green">Great Deal</span> : null}
                        {plan.totalCost >=1500 ? <span className="blue">Premium</span> : null }
                        {plan.allInclusive ? <span className="blue">All-Inclusive</span> : null}
                        <button className="delete" onClick= { () => {deleteItem(plan.id)}} >Delete</button>
                    </div>
                </div>
            )
        }
        )}
        </>
        
    )
}