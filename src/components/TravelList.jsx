import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from './TravelPlanCard';

export default function TravelList() {
    const [travelList, setTravelList] = useState(travelPlansData);
    const [favorites, setFavorites] = useState(new Set());

    const handleDeleteClick = (id) => {
        setTravelList(prev => prev.filter(item => item.id !== id));
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            newFavorites.delete(id);
            return newFavorites;
        });
    };

    const handleFavoriteClick = (plan) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(plan.id)) {
                newFavorites.delete(plan.id);
            } else {
                newFavorites.add(plan.id);
            }
            return newFavorites;
        });
    };

    return (
        <div>
            <div>
                {travelList.map((data) => (
                    <TravelPlanCard
                        key={data.id}
                        plan={data}
                        onDelete={handleDeleteClick}
                        onFavorite={handleFavoriteClick}
                        isFavorite={favorites.has(data.id)}
                    />
                ))}
            </div>
            <div>
                <h2>Favorites</h2>
                {Array.from(favorites).map(favId => {
                    const favoritePlan = travelList.find(plan => plan.id === favId);
                    return (
                        <TravelPlanCard
                            key={favId}
                            plan={favoritePlan}
                            onDelete={handleDeleteClick}
                            onFavorite={handleFavoriteClick}
                            isFavorite={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}