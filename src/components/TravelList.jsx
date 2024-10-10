import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
import TravelElement from "./TravelElement";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const deleteTravelElement = (id) => {
        setTravelPlans(travelPlans.filter(element => element.id !== id));
    };

    return (
        <div className="travel-list">
            {travelPlans.map((plan, index) => (
                <TravelElement key={plan.id} {...plan} onDelete ={deleteTravelElement}/>
            ))}
        </div>
    );
}

export default TravelList;