import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";
export const TravelList = () => {
  const [destinations, setDestination] = useState(travelPlansData);
  function handleDelete(theTravelId) {
  const filteredTravel = destinations.filter((oneTravel) => oneTravel.id !== theTravelId);
    setDestination(filteredTravel);
  }
  return (
    <div className="App">
    {destinations.map((currentTravel)=>{
      return (
        <div key={currentTravel.id} className="travel-card">
          <img src={currentTravel.image} id ="dest-img" alt="destination picture" />
          <div className='info-container'>
            <h3>{currentTravel.destination} ({currentTravel.days} Days)</h3>
            <h5>{currentTravel.description}</h5>
            <h5>Price:{currentTravel.totalCost} €</h5>
            <h5> {currentTravel.totalCost <= 350 ? "Great Deal" : "Premium"}  {currentTravel.allInclusive && <h5>All Inclusive</h5>}</h5>
            <button onClick={() => {handleDelete(currentTravel.id); }}> Delete</button>
          </div>
        </div>
      )
})};
    </div>
  )
}

