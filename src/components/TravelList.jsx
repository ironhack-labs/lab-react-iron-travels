import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";
import FavoriteTravelList from "./FavoriteTravelList";

const TravelList = () => {

    const [travel, setTravel] = useState(travelPlansData)

    const [favoriteTravel, setfavoriteTravel] = useState([])

    const removeTravel = travelIdToDelete => {
        const filteredTravel = travel.filter(elm => elm.id != travelIdToDelete)
        setTravel(filteredTravel)
    }

    const addFavoriteTravel = travelIdToFavorite => {
        const filteredFavoriteTravel = travel.find(elm => elm.id === travelIdToFavorite)
        if (filteredFavoriteTravel) {
            removeTravel(travelIdToFavorite)
            setfavoriteTravel((prevFavorites) => [...prevFavorites, filteredFavoriteTravel])
        }

    }

    return (
        <div className="MainTravels">
            <div className="travelsCard">
                {travel.map(eachTravel => {
                    return (
                        <TravelCard
                            key={eachTravel.id}
                            {...eachTravel}
                            removeTravel={removeTravel}
                            addFavoriteTravel={addFavoriteTravel} />)
                })}
            </div>
            <div className="favoriteTravelsCardList">
                <h2 className="titleFavorites">Favorites</h2>
                <div className="favoriteTravelCard">
                    {favoriteTravel.map(eachFavoriteTravel => {
                        return (
                            <FavoriteTravelList
                                key={eachFavoriteTravel.id}
                                {...eachFavoriteTravel}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TravelList