import travelPlansData from "../assets/travel-plans.json";
//console.log(travelPlansData)
import { useState } from "react";

function TravelList() {
  const [travelPack, setTravelPack] = useState(travelPlansData);

  const handleDelete = (indexDelete) => {
    const clone = JSON.parse(JSON.stringify(travelPack));
    clone.splice(indexDelete, 1);
    setTravelPack(clone);
  };

  return (
    <div>
      {travelPack.map((eachPack) => {
        return (
          <div className="packs-card">
            <img src={eachPack.image} alt="" width="150px" height="160px" />
            <div className="texto">
              <h3>
                {eachPack.destination} <span>({eachPack.days} days)</span>
              </h3>
              <p>{eachPack.description}</p>
              <p>
                <b>Price: </b>
                {eachPack.totalCost}€
              </p>
              <p>
                {" "}
                {eachPack.totalCost <= 350 ? (
                  <span className="label">Great Deal</span>
                ) : null}
                {eachPack.totalCost >= 1500 ? (
                  <span className="label">Premium</span>
                ) : null}{" "}
                <span className="label">All-Inclusive</span>
              </p>

                <button onClick ={ () => handleDelete(indexDelete)}>Delete</button>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
