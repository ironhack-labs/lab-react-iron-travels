import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
    const [travels, setTravels] = useState(travelPlansData);

    const deleteTravel = (travelToDelId) => {

        const newTravel = travels.filter((travelPlansData) => {
            if (travelPlansData.id !== travelToDelId) {
                return true; // keep it
            } else {
                return false; // discard it
            }
        })

        // const newList = moviesToDisplay.filter(movie => movie.id !== movieToDeleteId)

        setTravels(newTravel);
    }
    return (
        <div>
      {travels.map((itemObj) => (
        <div key={itemObj.id}>
          <p>{itemObj.destination}</p>
          <img src={itemObj.image} />
          <p>{itemObj.days} days</p>
          <p>{itemObj.allInclusive}</p>
          <p>${itemObj.totalCost}</p>
          <p>{itemObj.description}</p>
          {itemObj.totalCost <= 350 && <p>Great Deal</p>}
          {itemObj.totalCost >= 1500 && <p>Premium</p>}
          {itemObj.allInclusive && <p>All Inclusive</p>}
          <button onClick={() => { deleteTravel(itemObj.id) }}>Delete this movie</button>
        </div>
      ))}
    </div>
  );
}