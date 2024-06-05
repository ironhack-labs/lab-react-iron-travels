import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";

function travelList() {
  const [travels, setTravels] = useState(travelPlansData);
  

  function handleDeleteTravels(travelId) {
    const filteredTravels = travels.filter((travel) => travel.id !== travelId);
    setTravels(filteredTravels);
  }


return (
    {travels.map((travel) => (
      <article key={travel.id}>
        <h3>
          {travel.destination} "({travel.days})"{" "}
        </h3>
        <img src={travel.image} />
        <p> {travel.description} </p>
        <p> {travel.description} </p>
          <p>Price: {travel.totalCost}€</p>
          {travel.totalCost <= 350 ? <p>Great Deal</p> : <p></p>}
          {travel.totalCost >= 1500 ? <p>Premium</p> : <p></p>}
          {travel.allInclusive ? <p>All-Inclusive</p> : <p></p>}
          <button onClick={() => handleDeleteTravels(travel.id)}></button>
      </article>
    ))}

)
}

export default travelList
