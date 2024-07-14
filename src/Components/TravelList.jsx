import { useState } from "react";
import "./TravelList.css";
import travelPlansData from "../assets/travel-plans.json";
import Favourites from "./TravelPlanCard/Favourites";
function TravelList() {
  const [travels, setTravel] = useState(travelPlansData);
  const [favorites, setFavorites] = useState([]);
  function handleDelete(cardId) {
    const deletedCard = travels.filter((each) => each.id !== cardId);
    setTravel(deletedCard);
  }

  function handleFavorites(travel) {
    // console.log(travel)
    const foundFavorite = favorites.find((el) => el.id === travel.id);
    console.log("Found favorite: ", foundFavorite);
    if (foundFavorite) return;
    setFavorites([travel, ...favorites]);
  }
  function handleRemoveFromFavorites(id) {
    const filteredFav = favorites.filter((travel) => travel.id !== id);
    setFavorites(filteredFav);
  }
  console.log(favorites);

  return (
    <>
      <section>
        {travels.map((travel) => {
          return (
            <article key={travel.id}>
              <div className="rightSection">
                <img src={travel.image} alt="" />
              </div>
              <div className="leftSection">
                <h3>
                  {travel.destination} ({travel.days} Days)
                </h3>
                <p>{travel.description}</p>
                <p>
                  <span>Price: </span>
                  {travel.totalCost}$
                </p>
                {/* {travel.totalCost <= 350 ? (
                <p className="greatDeal">Great Deal</p>
              ) : travel.allInclusive === true && travel.totalCost >= 1500 ? (
                <div className="inclusiveSection">
                  <p className="premium">Premium</p>
                  <p className="premium">All-Inclusive</p>
                </div>
              ) : travel.totalCost >= 1500 ? (
                <p className="premium">Premium</p>
              ) : (
                <p></p>
              )} */}
                {travel.allInclusive && (
                  <p className="premium ">All-Inclusive</p>
                )}
                {travel.totalCost <= 350 && (
                  <p className="greatDeal">Great Deal</p>
                )}
                {travel.totalCost >= 1500 && <p className="premium">Premium</p>}
                <div className="buttons">
                  <button onClick={() => handleDelete(travel.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleFavorites(travel.id)}>
                    {" "}
                    Add to Favourites
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <Favourites travels={favorites} remove={handleRemoveFromFavorites} />
    </>
  );
}

export default TravelList;
