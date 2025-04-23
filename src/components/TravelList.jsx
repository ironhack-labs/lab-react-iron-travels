import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelListDisplay, setTravelListDisplay] = useState(travelPlansData);

  const deleteTravel = (travelDeleteId) => {
    const newList = travelListDisplay.filter((travel) => {
      if (travel.id !== travelDeleteId) {
        return true;
      } else {
        return false;
      }
    });
    setTravelListDisplay(newList);
  };

return (
  <section>
    {travelListDisplay.map((travelObj) => {
      return (
        <div className="TravelList" key={travelObj.id}>
          <img className="travel-img" src={travelObj.image} />
          <div className="list-title">
            <h3>
              {travelObj.destination} ({travelObj.days} Days)
            </h3>
            <p>{travelObj.description}</p>
            <p>Price: {travelObj.totalCost} €</p>
            {travelObj.totalCost <= 350 && <p>Great Deal</p>}
            {travelObj.totalCost >= 1500 && <p>Premium</p>}
            {travelObj.allInclusive && <p>All Inclusive</p>}
            <p>
              <button
                onClick={() => {
                  deleteTravel(travelObj.id);
                }}
              >
                Delete
              </button>
            </p>
          </div>
        </div>
      );
    })}
  </section>
);
}
export default TravelList;
