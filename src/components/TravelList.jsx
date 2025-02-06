import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import Favorites from "./Favorites";
export default function TravelList() {
  const [travel, setTravel] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const deleteTravel = (idDelete) => {
    const deleteTravelList = travel.filter((i) => i.id !== idDelete);
    setTravel(deleteTravelList);
  };
  const addFavorites = (favo) => {
    setFavorites([...favorites, favo]);
  };
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <div>
        {travel.map((item) => (
          <TravelPlanCard
            key={item.id}
            itemTravel={item}
            travelDel={deleteTravel}
            add={addFavorites}
          />
        ))}
      </div>
      <div>
        <h2>Favorites</h2>
        {favorites.map((item) => (
          <Favorites key={item.id} itemFavorite={item} />
        ))}
      </div>
    </div>
  );
}
