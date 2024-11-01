import React, { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard.jsx";

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [buttonColors, setButtonColors] = useState({});

  const handleClick = (id) => {
    const updatedList = travelList.filter((travel) => travel.id !== id);
    setTravelList(updatedList);
  };
  const handleClickFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);

    setButtonColors((prevColors) => {
      const currentColor = prevColors[id] || "grey";
      const currentColorIndex = colors.indexOf(currentColor) + 1;
      const nextColor = colors[Math.floor(Math.random() * colors.length)];
      return { ...prevColors, [id]: nextColor };
    });
  };

  return (
    <>
      <div className="travel-container">
        <ul>
          {travelList.map((plan) => (
            <TravelPlanCard
              key={plan.id}
              plan={plan}
              handleClick={handleClick}
              handleClickFavorite={handleClickFavorite}
              favoriteColor={buttonColors[plan.id] || "grey"}
            />
          ))}
        </ul>
        <div className="favorites">
          <h2>Favorites</h2>
          <ul className="travel-list">
            {favorites.map((favId) => {
              const favoritePlan = travelList.find((plan) => plan.id === favId);
              return (
                <li key={favoritePlan.id} className="favorite-list">
                  <div className="favorite-details">
                    <img src={favoritePlan.image} alt="image"></img>
                    <h2>
                      {favoritePlan.destination} {`(${favoritePlan.days} days)`}
                    </h2>
                    <p>
                      <span className="price">Price:</span>{" "}
                      {favoritePlan.totalCost}€
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TravelList;
