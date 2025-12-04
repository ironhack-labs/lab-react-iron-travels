import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
// Si tu json está en /data, cambia a: "../data/travel-plans.json"
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
    const [plans, setPlans] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);

    const handleDelete = (idToDelete) => {
        const filteredPlans = plans.filter((plan) => plan.id !== idToDelete);
        setPlans(filteredPlans);
    };

    const handleFavorite = (planToAdd) => {
        const alreadyFavorite = favorites.some(
            (favoritePlan) => favoritePlan.id === planToAdd.id
        );

        if (!alreadyFavorite) {
            setFavorites([...favorites, planToAdd]);
        }
    };

    return (
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            {/* Lista principal */}
            <div>
                <h2>All Travel Plans</h2>
                {plans.map((plan) => {
                    return (
                        <TravelPlanCard
                            key={plan.id}
                            plan={plan}
                            onDelete={handleDelete}
                            onFavorite={handleFavorite}
                        />
                    );
                })}
            </div>

            {/* Lista de favoritos */}
            <div>
                <h2>Favorites</h2>

                {favorites.length === 0 && <p>No favorites yet</p>}

                {favorites.map((plan) => {
                    return (
                        <div key={plan.id}>
                            <h3>{plan.destination}</h3>
                            <p>{plan.days} days</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TravelList;
