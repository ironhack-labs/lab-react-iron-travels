import { useState } from "react";
import travelPlan from "../assets/travel-plans.json";

function TraveList() {
  const [travelList, setTravelList] = useState(travelPlan);

const deleteMovie = (travelId) => {
    console.log(`deleting plan with the id... ${travelId}`);

    const newList = travelList.filter( (travelPlan) => travelPlan.id !== travelId)
setTravelList(newList)
}

  return (
    <section>
      {travelList.map((travelObj) => {
        return (
          <div className="card" key={travelList.id}>
            <img src={travelObj.image} />
            <div className="text-box">
              <h2>{travelObj.destination} </h2>
              <h3>{travelObj.description} </h3>
              <p>Price:{travelObj.totalCost} </p>
              {travelObj.totalCost < 350 && <p className="Deal">Great Deal</p>}
              {travelObj.totalCost > 1500 && <p className="Premium">Premium</p>}
              {travelObj.allInclusive && <p className="Premium">All Inclusive</p>}

            </div>
            <button onClick={() => {deleteMovie(travelObj.id)}}>Delete</button>
          </div>
        );
      })}
    </section>
  );
}

export default TraveList;
