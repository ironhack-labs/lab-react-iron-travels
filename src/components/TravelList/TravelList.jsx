import './../TravelList/TravelList.css'
import { useState } from "react";
import travelPlansData from "./../../assets/travel-plans.json";
import TravelCard from '../TravelCard/TravelCard';

const TravelList = () => {

  const [travelCards, setTravelCards] = useState(travelPlansData)


  return (
    <div className="TravelList">

      {
        travelCards.map(destination => {

          return <TravelCard travelInfo={destination} key={destination.id} />

        })
      }
    </div>
  )
}

export default TravelList