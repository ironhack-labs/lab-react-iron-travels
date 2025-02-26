import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData);

    const handleRemoveFromTravels = (indexDel) => {
        const clone = travelPlans.slice();
        clone.splice(indexDel, 1);
        setTravelPlans(clone);
    };


    return (
        <div>
            {travelPlans.map((eachPlan, index) => ( //texto e imagenes
                <div style={{ border: "1px solid black", padding: "20px", margin: "20px", display: "flex", alignItems: "center", maxWidth: "700px", }}>
                    <img src={eachPlan.image} alt={eachPlan.destination} style={{ width: "250px", marginRight: "70px" }} />

                    <div>
                        <h3>{eachPlan.destination}</h3>
                        <p>{eachPlan.description}</p>
                        <p>Price: {eachPlan.totalCost} €</p>

                        {eachPlan.totalCost <= 350 && ( //condicionales
                            <button style={{ backgroundColor: "#58d68d", color: "white", borderRadius: "15px", padding: "5px", margin: "12px", }}>Great Deal</button>
                        )}

                        {eachPlan.totalCost >= 1500 && (
                            <button style={{ backgroundColor: "#3498db", color: "white", borderRadius: "15px", padding: "5px", margin: "12px", }}>Premium</button>
                        )}

                        {eachPlan.allInclusive && (
                            <button style={{ backgroundColor: "#3498db", color: "white", borderRadius: "15px", padding: "5px", margin: "12px", }}>All Inclusive</button>
                        )}
                        <button
                            onClick={() => handleRemoveFromTravels(index)} style={{ backgroundColor: "#b71c1c", color: "white", borderRadius: "15px", padding: "5px", margin: "12px" }}>Delete
                        </button>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default TravelList;
