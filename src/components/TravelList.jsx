import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard.jsx";
import FavoriteList from "./FavoriteList.jsx"; // Importar el nuevo componente

export default function TravelList() {

    const [travels, setTravels] = useState(travelPlansData)

    const [favorites, setFavorites] = useState({});

    const deleteTravel = TravelId => {
        const filteredTravels = travels.filter(viaje => {
            return viaje.id !== TravelId;
        });

        setTravels(filteredTravels);
    };


    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [colorIndexes, setColorIndexes] = useState({});

    const changeNewColor = (travelId) => {
        setColorIndexes(prev => {
            const newIndex = (prev[travelId] || 0) + 1;
            return {
                ...prev,
                [travelId]: newIndex % colors.length
            };
        });

        toggleFavorite(travelId)

    };

    const toggleFavorite = (travelId) => {
        setFavorites(prev => ({
            ...prev,
            [travelId]: !prev[travelId]
        }));
    };

    const favoriteTravels = travels.filter(viaje => favorites[viaje.id])

    console.log(favoriteTravels)
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
            <div className="listado">
                {travels.map(viaje => {
                    return <TravelPlanCard key={viaje.id} viaje={viaje} clickToDelete={deleteTravel} changeColor={changeNewColor} color={colors[colorIndexes[viaje.id] || 0]} />;
                })}
            </div>
            <div>
            <FavoriteList favorites={favoriteTravels} toggleFavorite={toggleFavorite} />
            </div>
        </div>
    )


}