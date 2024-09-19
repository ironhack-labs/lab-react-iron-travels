import { useState } from "react";
import travelPlansData from '../../src/data/travel-plans.json'
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {

  // const [ travelPlans, setTravelPlans ] = useState((travelPlansData))
  const [ travelPlans, setTravelPlans ] = useState(() => {
    let originalPlans = []
    for (let i = 0; i < travelPlansData.length; i++) {
      originalPlans.push(travelPlansData[i])
    }
    return originalPlans
  })


  const [ favorites, setFavorites ] = useState([]) // check this empty array !!


  // const handleDelete = (id) => {
  //   const updatedTravelPlans = travelPlans.filter(plan => plan.id !== id)
  //   setTravelPlans(updatedTravelPlans)
  //   setFavorites(favorites.filter(plan => plan.id !== id)) // => removes deleted from favorites
  // }

  const handleDelete = (id) => {

    let updatedTravelPlans = []

    for (let i = 0; i < travelPlans.length; i++) {
      if (travelPlans[i].id !== id)
        updatedTravelPlans.push(travelPlans[i]) // array cloned and modified by handleDelete
    }

    setTravelPlans(updatedTravelPlans) // new list updated
  }



  const handleFavorites = (plan) => {
    if (!favorites.some(fav => fav.id === plan.id))
      setFavorites([...favorites, plan])
  }


  return (

    <div className="list-container">
      <div className="travel-list">
        <h2>Travels</h2>
          {travelPlans.map(plan => (
            <TravelPlanCard 
              key={plan.id} 
              plan={plan} 
              onDelete={() => handleDelete(plan.id)} 
              onFavorite={handleFavorites}
              
            />
          ))}
      </div>
      <div className="fav-list">
        <h2>Favorites</h2>
        {favorites.map(fav => (
          <div key={fav.id}>
            <TravelPlanCard plan={fav} onDelete={() => handleDelete(fav.id)} />
          </div>
        ))} 
      </div>
    </div>

    )
}

export default TravelList