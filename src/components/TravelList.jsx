import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const handleDelete = (id) => {
        setTravelPlans(prevPlans => prevPlans.filter(plan => plan.id !== id))
    };

    const travelArr = travelPlans.map((plan) => {
        return (
            <div className="plan-box" key={plan.id}>
                <img src={plan.image} alt={plan.destination} />
                <h3>{plan.destination}({plan.days} Days)</h3>
                <p>{plan.description}</p>

                <p><strong>Price:</strong> {plan.totalCost} €
                    {

                        plan.totalCost <= 350
                            ? <span className="deal">Great Deal</span>
                            : plan.totalCost >= 1500
                                ? <span className="premium">Premium</span>
                                : null
                    }
                    <p> {plan.allInclusive && <span className="all-inc">All Inclusive</span>}</p>
                </p>
                <button onClick={() => handleDelete(plan.id)}>Delete</button>
            </div>

        );
    });

    return (
        <div>
            {travelArr}
        </div>
    );
};


