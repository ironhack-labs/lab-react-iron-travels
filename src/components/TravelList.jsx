import { useState } from 'react'
import travelPlansData from '../assets/travel-plans.json'
import TravelPlanCard from './TravelPlanCard'

function TravelList() {
  const [travel, setTravel] = useState(travelPlansData)

  function handleDelete(i) {
    let clone = travel.slice(0)
    clone.splice(i, 1)
    setTravel(clone)
    console.log('hola')
  }
  return (
    <>
      {travel.map((cadatravel, index) => (
        <TravelPlanCard
          key={cadatravel.id}
          plan={cadatravel}
          i:index
          handleDelete={handleDelete}
        />
      ))}
    </>
  )
}

export default TravelList
