import travelPlansData from "../assets/travel-plans.json";
import { useState, useEffect } from "react";

function TravelList() {

   
    const [plans, setPlans] = useState(travelPlansData);

    
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const newLabels = plans.map((plan) => {
            const planLabels = [];

            if (plan.totalCost <= 350) planLabels.push("Great Deal");
            if (plan.totalCost >= 1500) planLabels.push("Premium");
            if (plan.allInclusive) planLabels.push("All Inclusive");

            return planLabels;
        });

        setLabels(newLabels);
    }, [plans]); 

    
    const handleDelete = (id) => {
        const updatedPlans = plans.filter(plan => plan.id !== id);
        setPlans(updatedPlans);
    };

    return (
        <>
            {plans.map((elm, index) => {
                return (
                    <div key={elm.id} className="card">
                        <p>{elm.destination}</p>

                        <img src={elm.image} alt="destinationImage" />

                        <p>{elm.days}</p>
                        <p>{elm.description}</p>

                        <p>Price: {elm.parts[0].cost} €</p>

                        
                        {labels[index] && labels[index].map((label, i) => (
                            <p key={i} className="label">{label}</p>
                        ))}

                        
                        <button onClick={() => handleDelete(elm.id)}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default TravelList;

