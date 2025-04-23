import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";

export default function TravelList() {
    const [plansToDisplay, setPlansToDisplay] = useState(travelPlansData);

    const deletePlan = (planToDeleteId) => {
        const newList = plansToDisplay.filter((plan) => plan.id !== planToDeleteId);
        setPlansToDisplay(newList); // Update the state with the new list
    }

    return (
        <section className="PlanList">

            <h1>Number of plans: {plansToDisplay.length}</h1> {/* Render the number of plans from the updated list */}

            {plansToDisplay.map((planObj) => {
                return (
                    <div key={planObj.id} className="card">
                        <img src={planObj.image} alt="Movie Poster" />
                        <p>{planObj.destination} ({planObj.days} Days)</p>
                        <p>{planObj.description}</p>
                        <p>
                            <button onClick={() => deletePlan(planObj.id)}>Delete this plan</button>
                        </p>
                    </div>
                )
            })}

        </section>
    );
}
