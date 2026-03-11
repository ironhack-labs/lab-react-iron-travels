import { useState } from "react"
import travels from "../assets/travel-plans.json"
import "./TravelList.css"
import TravelPlanCard from "./TravelPlanCard"

function TravelList() {

    const [travelToDisplay, setTravelToDisplay] = useState(travels)
    const [favorites, setFavorites] = useState([])

    const deleteTravels = (travelId) => {
        const filteredTravel = travelToDisplay.filter((travelObj) => {
            return travelObj.id !== travelId
        })

        setTravelToDisplay(filteredTravel)
    }

    const addFavorite = (travel) => {

        setFavorites((prevFavorites) => [...prevFavorites, travel])

        setTravelToDisplay((prevTravels) =>
            prevTravels.filter((travelObj) => travelObj.id !== travel.id)
        )

    }

    return (
        <div className="travels-container">
            <div className="cards-container">
                {travelToDisplay.map((travelObj) => {
                    return (
                        <TravelPlanCard
                            key={travelObj.id}
                            plan={travelObj}
                            onDelete={deleteTravels}
                            onFavorite={addFavorite}
                            isFavorite={false}
                        />

                    )
                })}
            </div>
            <div className="favorites-container">
                <h2>Favorites</h2>
                {favorites.map((fav) => (
                    <TravelPlanCard
                        key={fav.id}
                        plan={fav}
                        isFavorite={true}
                    />
                ))}
            </div>
        </div>
    )
}

export default TravelList