import "./travelList.css"
import travelPlansData from "../assets/travel-plans.json"
import TravelPlanCard from "./travelPlanCard"
import { useState } from "react"

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData)
  const [favorites, setFavorites] = useState([])

  const handleLike = (plan) => {
    if (!favorites.some(favorite => favorite.id === plan.id)) {
      setFavorites([...favorites, plan])
    }
  }

  const handleDelete = (id) => {
    setTravels(travels.filter(travel => id !== travel.id))
  }

  return (
    <div className="travelContainer">
      <ul className="ul">
        {travels.map(travel => (
          <TravelPlanCard
            key={travel.id}
            plan={travel}
            handleDelete={handleDelete}
            handleLike={handleLike}
          />
        ))}
      </ul>

      <div className="favorites">
        <h2>Favorites</h2>

        {favorites.length === 0 && <p>No favorites yet</p>}

        <ul className="favoritesList">
          {favorites.map(favorite => (
            <li className="favoriteCard" key={favorite.id}>
              <img src={favorite.image} alt={favorite.destination} />
              <div>
                <h4>{favorite.destination}</h4>
                <p>{favorite.totalCost}€</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TravelList