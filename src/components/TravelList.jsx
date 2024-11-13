import React, { useState } from 'react';
import travelPlansData from "../assets/travel-plans.json";
const TravelList = () => {
    const [plans, setPlans] = useState(travelPlansData);

    function handleDelete(planID) {

        const filteredPlans = plans.filter((aPlan) => aPlan.id !== planID);

        setPlans(filteredPlans);
    }

    return plans.map((plan) => {

        return (
            <div className='offer' key={plan.id}>
                <img src={plan.image} />
                <section>
                    <h3>{plan.destination}</h3>
                    <p>{plan.description}</p>
                    <p><strong>Price:</strong> {plan.totalCost}</p>
                    <div className='categories'>
                        {plan.totalCost <= 350 && (<div className='deal'>Great Deal</div>)}
                        {plan.totalCost >= 1500 && (<div className='premium'>Premium</div>)}
                        {plan.allInclusive && (<div className='allIn'>All Inclusive</div>)}
                    </div>
                    <button className='delete' onClick={() => {
                        handleDelete(plan.id);
                    }}>Delete</button>
                </section>
            </div>
        );
    });
};


export default TravelList;