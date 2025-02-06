import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";
import TravelFavorites from "./TravelFavorites";
export default function TravelList() {
    const [travel, setTravel] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);

    const handleDelete = (idToDelete) => {
        const updatedTravelList = travel.filter((travel) => travel.id !== idToDelete);
        setTravel(updatedTravelList);
    };

    const handleAddToFavorites = (plan) => {
        setFavorites([...favorites, plan]);
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                    {travel.map((plan) => (
                        <TravelPlanCard plan={plan} onDelete={handleDelete} onAddToFavorites={handleAddToFavorites} />
                    ))}
                </div>
            </div>
            <div style={{ flex: 1, marginLeft: "20px" }}>
                <h2>Favoritos</h2>
                {favorites.map((plan) => (
                    <TravelFavorites plan={plan} />
                ))}
            </div>

        </div>
    );
}