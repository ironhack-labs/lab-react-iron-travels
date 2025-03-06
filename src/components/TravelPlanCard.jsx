import { useState } from "react";

export default function TravelPlanCard({ plan, setPlan }) {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  return (
    <div className="page">
      <div className="layout">
        {plan.map((destination) => {
          const deleteItem = () => {
            setPlan(plan.filter((item) => item.id !== destination.id));
          };

          const favoriteItems = () => {
            const itemToFavorite = plan.find(
              (item) => item.id == destination.id
            );
            if (itemToFavorite) setFavorites([...favorites, itemToFavorite]);
            deleteItem();

            console.log(favorites);
          };
          return (
            <div className="card" key={destination.id}>
              <div>
                <img src={destination.image} className="picture"></img>
              </div>
              <div className="text">
                <h1>
                  {destination.destination} ({destination.days} Days)
                </h1>
                <p>{destination.description}</p>
                <p>
                  <b>Price: </b>
                  {destination.totalCost}€
                </p>
                <div className="labels">
                  {destination.totalCost <= 350 && (
                    <p className="greatDeals">Great Deal</p>
                  )}

                  {destination.totalCost >= 1500 && (
                    <p className="deal">Premium</p>
                  )}

                  {destination.allInclusive && (
                    <p className="deal">All inclusive</p>
                  )}
                </div>
                <div className="btn">
                  <button onClick={deleteItem}>Delete</button>
                  <button onClick={favoriteItems}>♡</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {favorites && (
        <div>
          <h3 className="text-iron">Favorites</h3>
          {favorites.map((favDestination) => {
            return (
              <div className="cardFavs" key={favDestination.id}>
                <div>
                  <img src={favDestination.image} className="pictureFavs"></img>
                </div>
                <div className="textFavs">
                  <p>
                    {favDestination.destination} ({favDestination.days} Days)
                  </p>
                  <p>
                    <b>Price: </b>
                    {favDestination.totalCost}€
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
