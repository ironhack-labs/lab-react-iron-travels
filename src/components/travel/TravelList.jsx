import { useState } from "react";
import travelPlansData from "../../assets/travel-plans.json";
import "./styles.css";
import TravelCard from "./TravelCard";
import {colors} from "../../libs/colors.js"

const TravelList = () => {
  const [travelPlan, setTravelPlan] = useState(travelPlansData);
  const [favs, setFavs] = useState([]);
  const [colorIndex, setColorIndex] = useState(0)

  function handleDelete(id) {
    setTravelPlan(travelPlan.filter((plan) => plan.id !== id));
  }

  function handleFavs(item){
    const randColorIndex = Math.floor(Math.random() * colors.length)
    const alreadyInFav = favs.some(fav => fav.id === item.id)
    setTravelPlan(travelPlan.filter((plan) => plan.id !== item.id));
    if(!alreadyInFav){
      setFavs([...favs, item])
    }

    setColorIndex(randColorIndex)

  }
  return (
    <div className="container">
      <div className="mainContent">
        <h2>Travel List</h2>
        {travelPlan.map((item) => (
          <div id="listContainer" key={item.id}>
            <TravelCard item={item} handleDelete={handleDelete} handleFavorite={handleFavs} />
          </div>
        ))}
      </div>
      <div className="favContent">
        <h2>Favourites</h2>
        {favs.length > 0 && favs.map((fav)=> (
          <div id="listContainer" key={fav.id}>
            <TravelCard item={fav} handleDelete={handleDelete} handleFavorite={handleFavs} style={{color: colors[colorIndex]}} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TravelList;
