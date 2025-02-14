import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import React from 'react';
import Travel from "../components/TravelPlanCard.jsx";
import TravelPlanCard from "../components/TravelPlanCard.jsx";
export default function TravelList() {

const [plans, setPlans] = useState(travelPlansData);
const [favorite, setFavorite] = useState([]);

const deleteTravel = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
};

const favoriteTravel = (id) => {
    const updatedPlans = plans.map((plan) => 
        plan.id === id ? {...plan, isFavorite: !plan.isFavorite} : plan
    );
    setPlans(updatedPlans)
    setFavorite(updatedPlans.filter((plan) => plan.isFavorite))
};

    return (
                <div className="travel-plan">
                    
                    {plans.map((plan) => (
                        <TravelPlanCard key={plan.id} plan={plan} deleteTravel={deleteTravel} favoriteTravel={favoriteTravel} />
                    ))}
                    
                    <div className="favorite">
                        <h2>Favorites</h2>
                        {favorite.map((plan) => (
                        <TravelPlanCard key={plan.id} plan={plan} deleteTravel={deleteTravel} favoriteTravel={favoriteTravel} />
                        ))}
                    </div>
                </div>
    );
};