import { useState } from 'react'
import TravelPlanCard from "/src/components/TravelPlanCard";
import travelPlansData from "/src/assets/travel-plans.json";

const TravelList = () => {
  const [travelPlan, setTravelPlan] = useState(travelPlansData)

  const deleteItemHandler = (id) => {
    setTravelPlan(travelPlan.filter(travel => travel.id !== id))
  }

  return (
    <div>
      {travelPlan.map(travel => (
        <TravelPlanCard key={travel.id} plan={travel} onClickDelete={deleteItemHandler} />
      ))}
    </div>
  )
}

export default TravelList