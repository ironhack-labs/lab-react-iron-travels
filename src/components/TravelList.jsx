import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

export default function TravelList() {
  const [list, setList] = useState(travelPlansData);

  const deleteItem = (placeId) => {
    const filteredItems = list.filter((place) => place.id !== placeId);
    setList(filteredItems);
  };

  return (
    <>
      {list.map((place) => (
        <div key={place.id}>
          <img src={place.image} />
          <p>
            Destination: {place.destination} ({place.days} Days)
          </p>
          {/*   <p>All Inclusive: {place.allInclusive}</p> */}
          <p>Description: {place.description}</p>
          <p>
            Price: $ {place.totalCost}
            {place.totalCost <= 350 ? (
              <label> Great Deal</label>
            ) : place.totalCost >= 1500 ? (
              <label> Premium</label>
            ) : (
              ""
            )}
          </p>
          {place.allInclusive ? <label>All Inclusive</label> : ""}
          <button onClick={() => deleteItem(place.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}
