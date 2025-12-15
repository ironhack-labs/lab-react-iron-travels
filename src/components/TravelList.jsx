import { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';

function TravelList() {
    const [plans, setPlans] = useState(travelPlansData);

    const handleDelete = (id) => {
        const filteredPlans = plans.filter((plan) => plan.id !== id);
        setPlans(filteredPlans);
    };

    return (
    <div className='travel-list-container'>
        {plans
        .filter((plan) => plan)
        .map((plan) => (

            <TravelPlanCard 
            key={plan.id}
            plan={plan}
            deletePlan={handleDelete}
            />

        ))}
    </div>

    );
}

export default TravelList;