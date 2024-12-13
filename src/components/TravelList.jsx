import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

const TravelList = () => {
    // Usa un estado para manejar la lista de planes de viaje
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    // Función para manejar la eliminación de un plan de viaje
    const handleDelete = (id) => {
        const updatedPlans = travelPlans.filter((plan) => plan.id !== id);
        setTravelPlans(updatedPlans);
    };

    return (
        <div className="travel-list">
            {travelPlans.map((plan) => (
                <div key={plan.id} className="travel-card">
                    <img src={plan.image} alt={plan.destination} className="travel-image" />
                    <div className="travel-info">
                        <h2>{plan.destination} ({plan.days} Days)</h2>
                        <p>{plan.description}</p>
                        <p><strong>Price:</strong> {plan.totalCost} €</p>
                        <div className="labels">
                            {plan.totalCost <= 350 && <span className="label great-deal">Great Deal</span>}
                            {plan.totalCost >= 1500 && <span className="label premium">Premium</span>}
                            {plan.allInclusive && <span className="label all-inclusive">All-Inclusive</span>}
                        </div>
                        <button className="delete-button" onClick={() => handleDelete(plan.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TravelList;
