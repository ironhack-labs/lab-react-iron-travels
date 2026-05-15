import { useState } from "react"
import travelPlansData from "../assets/travel-plans.json"
import TravelPlanCard from "./TravelPlanCard"

function TravelList() {
  const [travel, setTravel] = useState(travelPlansData)
  const [favorites, setFavorites] = useState([])
  const [favoriteColorIndexById, setFavoriteColorIndexById] = useState({})

  const favoriteColors = ["purple", "blue", "green", "yellow", "orange", "red"]

  function deleteTravel(travelId) {
    // Deletes ONE travel plan from state by id.
    // setTravel(prev => ...) uses the latest state value (safe if updates are queued).
    // filter returns a NEW array (doesn't mutate). It keeps items whose id is NOT travelId.
    setTravel(prev => prev.filter(item => item.id !== travelId))
    setFavorites(prev => prev.filter(item => item.id !== travelId))
    setFavoriteColorIndexById(prev => {
      const next = { ...prev }
      delete next[travelId]
      return next
    })
    /*
    deleteTravel(travelId)
    - travelId: the id of the item to remove (example: 3)

    setTravel(prev => ...)
    - Functional updater form: React gives you the latest state as "prev"
    - Safer than using "travel" directly when multiple updates happen

    prev.filter(item => item.id !== travelId)
    - filter creates a NEW array (no mutation)
    - Keeps items where item.id !== travelId
    - Removes the item where item.id === travelId

    Example (travelId = 3):
    prev: [1, 2, 3, 4]
          keep !=3
    next: [1, 2, 4]
  */
  }

  function favoriteTravel(plan) {
    setFavoriteColorIndexById(prev => {
      const currentIndex = prev[plan.id]
      const nextIndex =
        currentIndex === undefined
          ? 0
          : (currentIndex + 1) % favoriteColors.length
      return { ...prev, [plan.id]: nextIndex }
    })

    setFavorites(prev => {
      if (prev.some(item => item.id === plan.id)) return prev
      return [...prev, plan]
    })
  }

  return (
    <div className="travel-and-favorites">
      <div className="travel-column">
        <div className="container-item-list">
          {travel.map(plan => (
            <div
              className="item-list-image-description-days-price"
              key={plan.id}
            >
              <TravelPlanCard plan={plan} />

              <div className="plan-actions">
                <button
                  onClick={() => deleteTravel(plan.id)}
                  className="btn-delete"
                >
                  Delete 🗑
                </button>
                <button
                  onClick={() => favoriteTravel(plan)}
                  className="btn-favorite"
                  style={{
                    backgroundColor:
                      favoriteColorIndexById[plan.id] === undefined
                        ? undefined
                        : favoriteColors[favoriteColorIndexById[plan.id]],
                  }}
                >
                  ♡
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="favorites-column">
        <h2>Favorites</h2>
        <ul className="favorites-list">
          {favorites.map(plan => (
            <li key={plan.id} className="favorites-item">
              {plan.destination}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TravelList
