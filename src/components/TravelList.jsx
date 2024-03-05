import "./TravelList.css";

import travelPlansData from "../assets/travel-plans.json";

export const TravelList = () => {
  return (
    <div className="card-list">
      {travelPlansData.map((element) => {
        return (
          <div className="destination-card" key={element.id}>
            <img className="img" src={element.image}></img>
            <div className="text">
              <h3 className="name-days">
                {element.destination} ({element.days} Days)
              </h3>
              <div>{element.description}</div>
              <div>
                <span>Price: </span>
                {element.totalCost} €
              </div>
              <div> </div>
              <div> </div>
              <div> </div>
              <div> </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
