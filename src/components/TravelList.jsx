import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import { TravelPlanCard } from "./TravelPlanCard";
import { FavCard } from "./FavCard";

export const TravelList = () => {
  const [plans, setPlans] = useState(travelPlansData);

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [favColor, setFavColor] = useState("");

  function handleDelete(idItem) {
    const newArray = plans.filter((destination) => destination.id !== idItem);
    setPlans(newArray);
  }
  const [favs, setFavs] = useState([]);

  function handleFav(idItem) {
    const isFav = favs.find(item => item.id == idItem) ? true : false;
    if(isFav !== true){
        const newItem = plans.filter((destination) => destination.id === idItem);
        setFavs([...favs,newItem[0]]);
        // update the background color of the fav button
        if(favColor === colors[colors.length-1]){
            setFavColor(colors[0]);
        } else {
            const indexColor = colors.findIndex(color => color===favColor);
            setFavColor(colors[indexColor+1]);
        }
    } else {
        console.log("This Travel plan is already in your fav!");
    }
  }

  return (
    <>
      <hr className="hr" />
      <h2>Favorite plans</h2>
      <hr className="hr" />
      <div className="fav-container">
        {favs.length > 0 ? favs.map((fav)=> {
            return (
                <FavCard favorites={fav} key={fav.id + "_fav"}/>
            );
        }) : <p style={{width: '100%'}}>0 Favorite</p>}
      </div>
      <hr className="hr" />
      <h2>All travel plans</h2>
      <hr className="hr" />
      <div className="list-container">
        {plans.map((plan) => {
          return (
            <TravelPlanCard key={plan.id} plan={plan} delete={handleDelete} addFav={handleFav} bgColorFavBtn={favColor}/>
          );
        })}
      </div>
    </>
  );
};
