
import React, { useState } from 'react'
import TravelPlanCard from '../TravelPlanCard';
import travelPlansData from "../../assets/travel-plans.json";

const TravelList = () => {
  const [travelsArr, setTravelsArr] = useState(travelPlansData)

  const deleteItemHandler = (id) => {
    setTravelsArr(travelsArr.filter(travel => travel.id !== id))
  }

  return (
    <div>
      {travelsArr.map(travel => (
        <TravelPlanCard key={travel.id} plan={travel} onClickDelete={deleteItemHandler} />
      ))}
    </div>
  )
}

export default TravelList