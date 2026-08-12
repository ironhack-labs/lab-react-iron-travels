import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlan from "./TravelPlan";

function TravelList() {
  const [travelListData, setTravelListData] = useState(travelPlansData);
  const [favoriteList, setFavoriteList] = useState([]);

  function removeFromTravelList(idElement) {
    setTravelListData(
      travelListData.filter((travel) => travel.id !== idElement),
    );
  }

  function addToFavorite(idElement) {
    const element = travelListData.find((travel) => travel.id === idElement);
    if (element && !favoriteList.some((travel) => travel.id === element.id)) {
      setFavoriteList([...favoriteList, element]);
    }
  }

  return (
    <div className="travel-content">
      <div className="travelcard-list">
        {travelListData.map((travel) => {
          return (
            <TravelPlan
              key={"travel-" + travel.id}
              plan={travel}
              onDelete={removeFromTravelList}
              addFavorite={addToFavorite}
            ></TravelPlan>
          );
        })}
      </div>
      <div className="favorite">
        <h2>Favorites</h2>
        {favoriteList.map((travel) => {
          return (
            <div key={"favorite-" + travel.id} className="favorite-card" style={{ backgroundImage: `url(${travel.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
              <div className="favorite-content">
                <h3>
                    {travel.destination} {"("}
                    {travel.days} Days{")"}
                </h3>
                <p>{travel.totalCost} €</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelList;
