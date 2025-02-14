import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
    const [travelPlans, setTravelPlans] = useState(travelPlansData); // Estado para planes
    const [favs, setFavs] = useState([]); // Estado para favoritos
    const colors = [
        "#D5A6E3",  // pastel purple
        "#A2C2E1",  // pastel blue
        "#A3D9A5",  // pastel green
        "#F9E79F",  // pastel yellow
        "#F5B041",  // pastel orange
        "#F1948A"   // pastel red 
    ];

    // Función para eliminar viaje de la lista
    const deleteTravel = (id) => {
        const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id);
        setTravelPlans(updatedTravelPlans); // Actualizamos el estado
    };

    // Función para agregar/quitar favs
    const toggleFav = (plan) => {
        const isFav = favs.find(fav => fav.id === plan.id);

        if (isFav) {
            setFavs(prevFavs => prevFavs.filter(fav => fav.id !== plan.id));
        } else {
            setFavs(prevFavs => [...prevFavs, plan]);
        }
    };

    // Función que cambia el color del ♡
    const nextColor = (index) => {

    }

    return (
        <div>
            <div className="travel-list">
                <ul>
                    {travelPlans.map((plan) => (
                        <TravelPlanCard
                            key={plan.id}
                            plan={plan}
                            onDelete={deleteTravel}
                            toggleFav={toggleFav}
                            nextColor={nextColor}
                        />
                    ))}
                </ul>
            </div>


            <div className="favs-list">
                <h3>Favorites</h3>
                <ul>
                    {favs.map(fav => (
                        <TravelPlanCard
                            key={fav.id}
                            plan={fav}
                            deleteTravel={deleteTravel}
                            toggleFav={toggleFav}
                            nextColor={nextColor}
                            isFav={true}
                        />
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default TravelList; 