// src/components/TravelList.jsx
import { useState } from 'react';
import travelPlansData from "./assets/travel-plans.json"; // Ensure the path to the JSON file is correct
import './assets/TravelList.css'; // Import CSS for styling

const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    // Function to delete a travel plan by index
    const handleDelete = (indexToDelete) => {
        setTravelPlans(travelPlans.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div className="travel-list">
            <h1>Iron Travels</h1>
            <h2>Tailored Travel Plans for Ironhackers</h2>
            <div className="travel-list-container">
                {travelPlans.map((plan, index) => (
                    <div key={index} className="travel-card">
                        <img src={plan.image} alt={plan.destination} className="travel-image" />
                        <div className="travel-details">
                            <h3>{plan.destination} ({plan.days} Days)</h3>
                            <p>{plan.description}</p>
                            <p><strong>Price:</strong> <span style={{ fontStyle: 'normal' }}>{plan.totalCost} €</span></p>
                            
                            {/* Conditional rendering for "Great Deal" or "Premium All-Inclusive" */}
                            {plan.totalCost <= 350 && !plan.allInclusive ? (
                                <h4
                                    style={{
                                        fontSize: "0.9em",
                                        fontWeight: "bold",
                                        color: "black",
                                        backgroundColor: "green",
                                        padding: "5px",
                                        borderRadius: "5px",
                                        display: "inline-block",
                                        marginTop: "2px",
                                        marginRight: "250px",
                                        width: "74px",
                                    }}
                                >
                                    Great Deal
                                </h4>
                            ) : (
                                <div style={{ display: "flex", gap: "5px" }}>
                                    <h4
                                        style={{
                                            fontSize: "1.0em",
                                            fontWeight: "bold",
                                            color: "white",
                                            backgroundColor: "rgb(32, 9, 241)",
                                            padding: "3px",
                                            borderRadius: "5px",
                                            display: "inline-block",
                                            margintop:"2px"
                        
                                            
                                        }}
                                    >
                                        Premium
                                    </h4>
                                    <h4
                                        style={{
                                            fontSize: "1.0em",
                                            fontWeight: "bold",
                                            color: "white",
                                            backgroundColor: "rgb(32, 9, 241)",
                                            padding: "3px",
                                            borderRadius: "5px",
                                            display: "inline-block",
                                           
                                        }}
                                    >
                                        All-Inclusive
                                    </h4>
                                </div>
                            )}

                            {/* Delete Button - Now positioned below the labels */}
                            <button onClick={() => handleDelete(index)} className="delete-button">
                             Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TravelList;
