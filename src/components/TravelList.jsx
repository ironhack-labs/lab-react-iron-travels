import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json"; 

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData); 

   
    const handleDelete = (id) => {
        const updatedPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedPlans);
    };

    return (
        <div>
            <h2>Available Travel Plans</h2>
            {travelPlans.length === 0 ? (
                <p>No travel plans available.</p>
            ) : (
                <ul>
                    {travelPlans.map((plan) => (
                        <li key={plan.id} style={{ listStyle: "none", marginBottom: "20px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px", position: "relative" }}>
                            <h3>{plan.destination}</h3>
                            <img src={plan.image} alt={plan.destination} style={{ width: "200px", borderRadius: "8px" }} />
                            <p><strong>Duration:</strong> {plan.days} days</p>
                            <p><strong>Description:</strong> {plan.description}</p>
                            <p><strong>Total Cost:</strong> ${plan.totalCost}</p>
                            <p><strong>All Inclusive:</strong> {plan.allInclusive ? "✅ Yes" : "❌ No"}</p>

                            
                            <div>
                                {plan.totalCost <= 350 && <span style={{ backgroundColor: "green", color: "white", padding: "5px 10px", borderRadius: "5px", marginRight: "5px" }}>Great Deal</span>}
                                {plan.totalCost >= 1500 && <span style={{ backgroundColor: "goldenrod", color: "white", padding: "5px 10px", borderRadius: "5px", marginRight: "5px" }}>Premium</span>}
                                {plan.allInclusive && <span style={{ backgroundColor: "blue", color: "white", padding: "5px 10px", borderRadius: "5px" }}>All Inclusive</span>}
                            </div>

                           
                            <button onClick={() => handleDelete(plan.id)} style={{ backgroundColor: "red", color: "white", padding: "5px 10px", borderRadius: "5px", border: "none", cursor: "pointer", marginTop: "10px" }}>
                                Delete ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TravelList;
