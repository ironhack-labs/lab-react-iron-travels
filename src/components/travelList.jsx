import "./travelList.css"
import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react"
function TravelList () {

  const [travels, setTravels] = useState(travelPlansData)

  const handleDelete = (id) => {
    setTravels(
      travels.filter(travel => (id !== travel.id))
    )
  }

  return (
    <ul className="ul">
      {travels.map(travel => (
      <li key={travel.id} className="li">
        <div className="img">
          <img src={travel.image} />
        </div>
        <div className="information">
          <h1>{travel.destination} ({travel.days} Days)</h1>
          <p className="description">{travel.description}</p>
          <p><strong>Price:</strong> {travel.totalCost}€</p>
          <div>
            {travel.totalCost <= 350 && <span className="greatDeal">Great Deal</span>}
            {travel.totalCost >= 1500 && <span className="label">Premium</span>}
            {travel.allInclusive && <span className="label">All-Inclusive</span>}
          </div>
          <div className="buttons">
            <button className="delete" onClick={() => handleDelete(travel.id)}>Delete</button>
          </div>
        </div>
      </li>))}
    </ul>
  )
}

export default TravelList