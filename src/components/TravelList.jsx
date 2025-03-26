import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";
import Favourites from "./Favourites";

export default function TravelList() {
  const [newList, setNewList] = useState(travelPlansData);
  const [favourites, setFavourites] = useState([])
  const [color, setColor] = useState("rgba(165, 154, 154, 0.704)");
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];



  const deleteItem = (planId) => {
    const updatedList = newList.filter((item) => {
      return item.id !== planId;
    });
    setNewList(updatedList);
    console.log(updatedList);
  };

  const addFavourite = (favId) => {
    const updatedFav = newList.find((item) => item.id === favId)

    const isAlreadyFav = favourites.some(fav => fav.id === favId)

  if (!isAlreadyFav) {
    setFavourites((favourites) => [...favourites, updatedFav])
  }

  deleteItem(favId);
  setRdmColor()
  } 

  const setRdmColor = () => {
    setColor(colors[Math.floor(Math.random()* 6)])
  }




  

  return (
    <>
      <main>
        <div id="test">
          {newList.map((item) => {
            return (
              <div className="offer" key={item.id}>
                <TravelPlanCard color={color} item={item} addFavourite={addFavourite} deleteItem={deleteItem} />
              </div>
            );
          })}
        </div>
        {favourites.length > 0 && (
          <>
            <Favourites favourites = {favourites} />
          </>
        )}
      </main>
    </>
  );
}
