import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from '../TravelPlanCard/TravelPlanCard.jsx';

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

const TravelList = () => {
    const [plans, setPlans] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);
    const [buttonColors, setButtonColors] = useState({});

    const deletePlan = (id) => {
        setPlans(plans.filter((plan) => plan.id !== id));
        setFavorites(favorites.filter((fav) => fav.id !== id));
    };

    const toggleFavorite = (plan) => {
        setFavorites((prevFavorites) =>
            prevFavorites.find((fav) => fav.id === plan.id)
                ? prevFavorites.filter((fav) => fav.id !== plan.id)
                : [...prevFavorites, plan]
        );

        setButtonColors((prevColors) => ({
            ...prevColors,
            [plan.id]: colors[Math.floor(Math.random() * colors.length)]
        }));
    };

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <h1>Travel Plans</h1>
                <ul>
                    {plans.map((plan) => (
                        <li key={plan.id}>
                            <TravelPlanCard plan={plan} onDelete={deletePlan} />
                            <button
                                onClick={() => toggleFavorite(plan)}
                                style={{
                                    backgroundColor: buttonColors[plan.id] || "transparent",
                                }}
                            >
                                ♡
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ marginLeft: '50px' }}>
                <h2>Favorites</h2>
                <ul>
                    {favorites.map((plan) => (
                        <TravelPlanCard key={plan.id} plan={plan} onDelete={deletePlan} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TravelList;

