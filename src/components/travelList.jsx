import "./travelList.css"
import travelPlansData from "../assets/travel-plans.json"
import TravelPlanCard from "./travelPlanCard"
import { useState } from "react"

function TravelList () {

  const [travels, setTravels] = useState(travelPlansData)
  const [favorites, setFavorites] = useState([])

  const handleLike = (plan) => {
    setFavorites(
      [...favorites, plan]
    )

  }

  const handleDelete = (id) => {
    setTravels(
      travels.filter(travel => (id !== travel.id))
    )
  }

return (
  <div>
    <ul className="ul">
      {travels.map(travel => (
        <TravelPlanCard key={travel.id} plan={travel} handleDelete={handleDelete} handleLike={handleLike}/>
      ))}
    </ul>
    <div className="li">
      <h2>Favorites</h2>
      <ul className="ul">
        {favorites.map(favorite => (
          <li className="information" key={favorite.id}>
          <img className="img" src={favorite.image}/>
          <h4>
          {favorite.destination}
          </h4>
          <p>{favorite.totalCost}€</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
}

export default TravelList