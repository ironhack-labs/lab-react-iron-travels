import data from "../assets/travel-plans.json";
import { useState } from "react";
import TravelPlanCard from "./travelplan-card";

function TravelList(){

  const [ travels, setTravels ] = useState(data);
  const [ favorites, setFavorites ] = useState([]);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color, setColor] = useState("purple");


  function deletePlan(id){
    const newPlans = travels.filter((plan) => plan.id !== id);
    setTravels(newPlans);
  }

  function toFavs(id) {
    const favs = travels
    .filter((plan) => plan.id === id)
    .map((plan) =>{
      return (<div className="d-flex flex-column border rounded-2 m-2">
          <div>
            <img src={plan.image} alt={plan.destination} />
          </div>
          <div>
            <p>
              <strong>{`${plan.destination} (${plan.days} Days)`}</strong> <br />
              <strong>Price:</strong> {plan.totalCost}€ <br />
            </p>
          </div>
        </div>);});
    deletePlan(id);
    setFavorites([favs,...favorites]);
  }

  function changeColor() {
    const random = Math.floor(Math.random() * colors.length);
    const newColor = colors[random];
    setColor(newColor);
  }


  const cards = travels.map((plan) => {
    return <TravelPlanCard plan={{p: plan, del: deletePlan, fav: toFavs, col: color, chanCol: changeColor}} />;
  });

  return (
    <>
      <div className="TravelList d-flex flex-column align-items-center">
        {cards}
      </div>
      <div className="favorites d-flex flex-column align-items-center border rounded m-2 p-2">
        <h4>Favorites</h4>
        {favorites}
      </div>
    </>
  );
}

export default TravelList;