import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";
import Favorites from "./Favorites";


const TravelList = () => {

  const [destinations, setDestinations] = useState(travelPlansData)
  const [favorites, setFavorites] = useState([])

  const removeDestination = (id) => {
    let filtered = destinations.filter((destination) => destination.id !== id)
    setDestinations(filtered)
  }

  const addToFavorites = (id) => {
    let thisFavorite = destinations.find((destination) => destination.id === id)
    let foundFavorite = favorites.find((favorite) => favorite.id === id)
    if (!foundFavorite) {

      setFavorites([thisFavorite, ...favorites])
    }
  }

  return (
    <div className="travel-container">

        <div className="travel-list">

          {
            destinations.map((destination) => {
              return (
                <TravelPlanCard destination={destination} removeDestination={removeDestination} addToFavorites={addToFavorites} />
              )
            })
          }
        </div>

        <div className="favorites-container">

          <h2>Favorites</h2>

          {
            favorites.map((favorite) => {
              return (
                <Favorites key={favorite.id} favorite={favorite} />
              )
            })
          }

        </div>
    </div>
  )
}

export default TravelList