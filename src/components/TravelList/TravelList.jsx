import { useState } from "react";
import travelPlansData from "../../assets/travel-plans.json";
import "./TravelList.css";

function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);

  const handleDeleteTravelList = (index) => {
    const cloneList = [...travelData];
    cloneList.splice(index, 1);
    setTravelData(cloneList)
  }

  return (
    <div>
      {travelData.map((eachDestino, index) => {
        return (
          <div className="cardDestino" key={index}>
            <div>
              <img src={eachDestino.image} width={300} />
            </div>

            <div className="dataDestino">
              <h1>
                {eachDestino.destination}({eachDestino.days} Days){" "}
              </h1>
              <p>{eachDestino.description}</p>
              <p>
                <strong>Price: </strong>
                {eachDestino.totalCost} €
              </p>

              {eachDestino.totalCost <= 350 && (
                <label className="great-deal">Great Deal</label>
              )}
              {eachDestino.totalCost >= 1500 && (
                <label className="premium">Premium</label>
              )}
              {eachDestino.allInclusive && (
                <label className="all-inclusive">All Inclusive</label>
              )}

              <button onClick={handleDeleteTravelList}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
