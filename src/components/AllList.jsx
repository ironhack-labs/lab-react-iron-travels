import TravelList from "./TravelList";
import React, { useState } from "react";
import plans from "../assets/travel-plans.json";

function AllList() {
  const [lists, setLists] = useState(plans);
  const [favLists, setFavLists] = useState([]);

  function handleDelete(id) {
    const newList = lists.filter((list) => {
      return list.id !== id;
    });
    setLists(newList);
  }

  function handleFav(plan) {
    setFavLists([...favLists, plan]);
  }

  return (
    <>
    <div id="main">
      <ul>
        {lists.map((plan) => {
          return (
            <TravelList
              key={plan.id}
              id={plan.id}
              destination={plan.destination}
              days={plan.days}
              description={plan.description}
              totalCost={plan.totalCost}
              image={plan.image}
              allInclusive={plan.allInclusive}
              handleDelete={handleDelete}
              handleFav={handleFav}
              plan={plan}
            />
          );
        })}
      </ul>
      <div>
        <h1>Favorites</h1>
        <ul id="fav">
          {favLists.map((favList) => {
            return (
              <li key={favList.id}>
                {favList.destination}
                <img src={favList.image} />
              </li>
            );
          })}
        </ul>
      </div>
          </div>

    </>


  );
}
export default AllList;
