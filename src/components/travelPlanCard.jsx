
import "./travelList.css"
import { useState } from "react"

function TravelPlanCard({ plan, handleDelete, handleLike }) {

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
  const [colorIndex, setColorIndex] = useState(0)

  const handleFavorite = () => {
    handleLike(plan)

    if (colorIndex === colors.length - 1) {
      setColorIndex(0)
    } else {
      setColorIndex(colorIndex + 1)
    }
  }

  return (
    <li className="li">
      <div className="img">
        <img src={plan.image} alt={plan.destination} />
      </div>

      <div className="information">
        <h1>{plan.destination} ({plan.days} Days)</h1>
        <p className="description">{plan.description}</p>
        <p><strong>Price:</strong> {plan.totalCost}€</p>

        <div className="labels">
          {plan.totalCost <= 350 && <span className="greatDeal">Great Deal</span>}
          {plan.totalCost >= 1500 && <span className="label">Premium</span>}
          {plan.allInclusive && <span className="label">All-Inclusive</span>}
        </div>

        <div className="buttons">
          <button
            className="delete"
            onClick={() => handleDelete(plan.id)}
          >
            Delete
          </button>

          <button
            className="like"
            style={{ backgroundColor: colors[colorIndex] }}
            onClick={handleFavorite}
          >
            ♡
          </button>
        </div>
      </div>
    </li>
  )
}

export default TravelPlanCard
