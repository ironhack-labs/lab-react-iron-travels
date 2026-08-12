import { useState } from "react"

  function TravelPlanCard(props) {
    const travel = props.travel;
    const deleteTravel = props.deleteTravel;
    const addFavorite = props.addFavorite;

  return (
    <div>
      <img src={travel.image} alt={travel.destination} />
      <h1>{travel.destination}</h1>
      <p>{travel.description}</p>
      <p>Cost: {travel.totalCost}€</p>

      {travel.allInclusive && <p>All Inclusive</p>}
      {travel.totalCost < 350 ? <p>Great Deal</p> : null}
      {travel.totalCost > 1500 ? <p>Premium</p> : null}

      <button onClick={() => deleteTravel(travel.id)}>Delete</button>
      <button onClick={() => addFavorite(travel)}>Favorite</button>
    </div>
  );
}

export default TravelPlanCard;