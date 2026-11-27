import "./travelList.css"
import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react"
function TravelList () {

  const [travels, setTravels] = useState(travelPlansData)


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
          <span>{travel.allInclusive ? "All-Inclusive" : null}</span>
        </div>
      </li>))}
    </ul>
  )
}

export default TravelList