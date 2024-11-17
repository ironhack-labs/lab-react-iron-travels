import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";
import { useState } from "react";

function TravelList() {
  const [travels, setTravels] = useState(travelPlansData);
  const [favTravels, setFavTravels] = useState([]);

  function travelDeleted(diito) {
    const newTravels = travels.filter((travel) => travel.id !== diito);

    setTravels(newTravels);
  }

  function addFav(diito) {
    if (!favTravels.find((fav) => fav.id === diito)) {
      setFavTravels([
        ...favTravels,
        travels.find((travel) => travel.id === diito),
      ]);
    }
  }

  return (
    <div className="hero">
      <ul className="travels-container">
        {travels.map((travel) => (
          <li className="travel-card" key={travel.id}>
            <img src={travel.image} className="travel-image" alt="image" />
            <div className="hero-section">
              <h2>
                {travel.destination} ({travel.days} Days)
              </h2>
              <i>{travel.description}</i>
              <br />
              <b>Price: </b>
              <span>{travel.totalCost} €</span>
              <br />
              {travel.totalCost <= 350 ? (
                <div className="great-deal">
                  <b>Great Deal</b>
                </div>
              ) : null}
              <br />
              {travel.totalCost >= 1500 ? (
                <div className="premium">
                  <b>Premium</b>
                </div>
              ) : null}
              {travel.allInclusive ? (
                <div className="all-inclusive">
                  <b>All-inclusive</b>
                </div>
              ) : null}
              <br />
              <button
                onClick={() => travelDeleted(travel.id)}
                className="delete-btn"
              >
                Delete
              </button>
              <button onClick={() => addFav(travel.id)} className="fav-btn">
                ♡
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="favourites">
        <h2>Favourites</h2>
        <ul className="fav-container">
          {favTravels.map((travel) => (
            <li className="fav-card" key={travel.id}>
              <img src={travel.image} className="fav-image" alt="image" />

              <div className="fav-section">
                <h2>
                  {travel.destination} ({travel.days} Days)
                </h2>
        
                <b>{travel.totalCost} €</b>
        
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TravelList;
