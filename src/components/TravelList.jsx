import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
    const [plans, setPlans] = useState(travelPlansData);
    const handleOnClickBtn = (id) => {
        const updatedPlans = plans.filter(plan => plan.id !== id);
        setPlans(updatedPlans);
    };

    return (
        <>
            {plans.map(plan => (
                <div className="TravelList" key={plan.id}>
                    <img src={plan.image} alt={plan.destination} />
                    <div className="TravelListContent">
                        <p>
                            <strong>{plan.destination} ({plan.days} Days)</strong>
                            <br />
                            <em>{plan.description}</em>
                            <br />
                            <strong>Price: </strong>{plan.totalCost}
                            <br />
                            {plan.totalCost <= 350  && <span> Great Deal</span>}
                            {plan.totalCost >= 1500  && <span> Premium</span>}
                            {plan.allInclusive && <span> All Inclusive</span> }
                        </p>
                        <button onClick={() => handleOnClickBtn(plan.id)}>Delete</button>
                    </div>

                </div>
            ))}
        </>
    )
}

export default TravelList
