import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
    const [plans, setPlans] = useState(travelPlansData);

    // Iteración 3: borrar plan por ID
    const handleDelete = (idToRemove) => {
        setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== idToRemove));
    };

    return (
        <div className="travel-list">
            {plans.map((plan) => (
                <div key={plan.id} className="travel-card">

                    {/* Imagen a la izquierda */}
                    <img className="travel-img" src={plan.image} alt={plan.destination} />

                    {/* Info a la derecha */}
                    <div className="travel-info">
                        <h2>
                            {plan.destination}, {plan.country} ({plan.days} Days)
                        </h2>

                        <p className="description">{plan.description}</p>

                        <p className="price">
                            <strong>Price:</strong> {plan.totalCost} €
                        </p>

                        {/* Iteración 2: Labels según coste */}
                        <div className="labels">
                            {plan.totalCost <= 350 && (
                                <span className="label label-deal">Great Deal</span>
                            )}

                            {plan.totalCost >= 1500 && (
                                <span className="label label-premium">Premium</span>
                            )}

                            {plan.allInclusive && (
                                <span className="label label-inclusive">All-Inclusive</span>
                            )}
                        </div>

                        {/* Iteración 3: Botón de eliminar */}
                        <button
                            className="delete-btn"
                            onClick={() => handleDelete(plan.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TravelList;