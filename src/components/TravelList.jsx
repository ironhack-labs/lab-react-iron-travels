import {useState} from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);


    return (
        <div>
            <h1>TravelPlans</h1>
            <ul>
                {travelPlans.map((plan) => (
                    <li key={plan.id}>
                        <strong>{plan.destination}</strong> - {plan.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TravelList