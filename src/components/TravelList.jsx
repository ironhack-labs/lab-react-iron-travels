import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import Favorite from "./Favorite";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);

  const deleteItem = (id) =>
    setTravelPlans(travelPlans.filter((travelPlan) => travelPlan.id !== id));

  const toFavorites = (id) => {
    const favorite = travelPlans.find((travelPlan) => travelPlan.id === id);
    setFavorites([...favorites, favorite]);
    deleteItem(id);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        className="travel-planes"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {travelPlans.map((travelPlan) => {
          return (
            <TravelPlanCard
              key={travelPlan.id}
              plan={travelPlan}
              deleteItem={deleteItem}
              toFavorites={toFavorites}
            />
          );
        })}
        ;
      </div>


      <div
        className="favorites"
        style={{
          display: "flex",
          width: "35%",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}>
        <h2>Favorites</h2>
        {favorites.map((favorite) => <Favorite key={favorite.id} favorite={favorite} />)}
        
        </div>
    </div>
  );
};
export default TravelList;
