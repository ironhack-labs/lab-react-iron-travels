import "./travelList.css"
import travelPlansData from "../assets/travel-plans.json"
import { useState } from "react"
function TravelList () {

  const [travel, setTravel] = useState(travelPlansData)


  return (
    <ul>
      {travel.map(tr => <li key={crypto.randomUUID}><img src={tr.image}></img></li>)}
    </ul>
  )
}

export default TravelList