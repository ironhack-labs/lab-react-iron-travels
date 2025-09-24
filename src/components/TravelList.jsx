import travelPlansData from "../assets/travel-plans.json";
import React from "react";
import { useState } from "react";

const TravelList = () => {
  console.log(travelPlansData);
  const [travelList, settravelList] = useState(travelPlansData);

  //fav list
  const [favID, setFavID] = useState([]);

  function handleDelete(listID) {
    const filterTravelList = travelList.filter((list) => {
      if (list.id !== listID) {
        return true;
      }
    });
    settravelList(filterTravelList);
  }
  //handle fav
  function handleFavcon(pressId) {
    const favIdList = [...favID, pressId];
    setFavID(favIdList);
  }

  const FavArray = favID.map((id) => {
    return travelList.find((trip) => trip.id === id);
  });

  return (
    <div id="coloum">
      {travelList.map((oneList) => {
        return (
          <div key={oneList.id} className="travelCard">
            <img alt={oneList.description} src={oneList.image} />
            <section>
              <h5>
                {oneList.destination} ({oneList.days} Days )
              </h5>
              <h5>{oneList.description} </h5>
              <h5>Price: {oneList.totalCost}€ </h5>
              <h5>
                <span className="Tag">
                  {oneList.totalCost <= 350 ? "Good-deal" : "Premium"}
                </span>
                {oneList.allInclusive === true && (
                  <span className="Tag"> All-Inclusive </span>
                )}
              </h5>
              <button
                onClick={() => {
                  handleDelete(oneList.id);
                  console.log(oneList.id);
                }}
              >
                Delete
              </button>

              <button
                onClick={() => {
                  handleFavcon(oneList.id);
                }}
              >
                ♡
              </button>
            </section>
          </div>
        );
      })}
      <div id="favorite">
        <h2>Favorites</h2>
        {FavArray.map((oneFav) => {
          return (
            <div>
              <section className="travelCard" key={oneFav.id}>
                <img alt={oneFav.description} src={oneFav.image} />
                <h5>
                  {oneFav.destination} ({oneFav.days} Days )
                </h5>
                <h5>Price: {oneFav.totalCost}€ </h5>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TravelList;
