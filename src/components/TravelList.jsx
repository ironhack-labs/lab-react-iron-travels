import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
  const [travelListObj, setTravelList] = useState(travelPlansData);

  const handleDeleteTravelList = (index) => {
    const cloneList = [...travelListObj];
    cloneList.splice(index, 1);
    setTravelList(cloneList)
  }
  return (
    <div>
      <ul>
        {travelListObj.map((eachTravelList, index) => {
          return (
            <li key={eachTravelList.id} className="travel-list">
              <img src={eachTravelList.image} width={300} />
              <div className="travel-list-desc">
                <h3>
                  {eachTravelList.destination} ({eachTravelList.days} days)
                </h3>
                <p>{eachTravelList.description}</p>
                <p>Price: {eachTravelList.totalCost}€</p>

                {/*Etiquetas condicionales */}
                {eachTravelList.totalCost <= 350 && (
                  <label className="great-deal">Great Deal</label>
                )}
                {eachTravelList.totalCost >= 1500 && (
                  <label className="premium">Premium</label>
                )}
                {eachTravelList.allInclusive && (
                  <label className="all-inclusive">All Inclusive</label>
                )}
              </div>

              <button onClick={() => handleDeleteTravelList(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TravelList;
