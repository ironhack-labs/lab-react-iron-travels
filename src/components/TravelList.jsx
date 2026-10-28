import travelPlans from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelValue, setTravelValue] = useState(travelPlans);
  const [favValue, setFavValue] = useState([]);

  const handleRemoveFromList = (index) => {
    const stateClone = [...travelValue];
    stateClone.splice(index, 1);
    setTravelValue(stateClone);
  };

  const handleAddToFav = (index) => {
    const stateClone = [...favValue];
    stateClone.push(travelValue[index]);
    setFavValue(stateClone);
    handleRemoveFromList(index);
  };

  return (
    <div className="superDiv">
      <div className="listContainer">
        {travelValue.map((destination, index) => {
          return (
            <div key={index} id="styleOuterDiv">
              <img src={destination.image} alt="" width="200px" />
              <div id="styleText">
                <h4>
                  {destination.destination} ({destination.days} Days)
                </h4>
                <p>{destination.description}</p>
                <p>Price: {destination.totalCost} €</p>
                {destination.allInclusive && (
                  <label id="styleLabelBlue">All Inclusive</label>
                )}
                {destination.totalCost > 1500 && (
                  <label id="styleLabelBlue">Premium</label>
                )}
                {destination.totalCost <= 350 && (
                  <label id="styleLabelGreen">Great Deal</label>
                )}
                <br />
                <button onClick={() => handleRemoveFromList(index)}>
                  Delete
                </button>
                <button onClick={() => handleAddToFav(index)}>♡</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="favContainer">
        <h2>Favorites</h2>
        {favValue.map((destination, index) => {
          return (
            <div id="favDiv">
              {" "}
              <img src={destination.image} alt="" width="150px" />
              <h4>
                {destination.destination} ({destination.days} Days)
              </h4>
              <p>{destination.totalCost} €</p> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TravelList;
