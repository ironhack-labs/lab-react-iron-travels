import travelList from "../assets/travel-plans.json"
import { useState } from "react"
import TravelCard from "./TravelCard"
import Favorites from "./Favorites"

export default function TravelList() {
  const [travels, setTravels] = useState(travelList)
  const [favorites, setFavorites] = useState([])

  const handleDelete = (id) => {
    setTravels(travels.filter((current) => current.id !== id))
  }

  const handleFavorite = (destination) => {
    setFavorites((previous) =>
      previous.includes(destination)
        ? previous.filter((current) => current.id !== destination.id)
        : [...previous, destination],
    )
  }

  return (
    <div>
      <h1>Travel list:</h1>
      <div style={{ display: "flex", gap: "5%" }}>
        <div>
          {travels.map((destination) => (
            <TravelCard
              destination={destination}
              key={destination.id}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
            />
          ))}
        </div>
        <div>
          <Favorites favorites={favorites} />
        </div>
      </div>
    </div>
  )
}