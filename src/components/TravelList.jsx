import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [items, setItems] = useState(travelPlansData);
  return (
    <div id="travel-list">
      {items.map((item) => {
        return (
          <div id="travel-item" key={item.id}>
            <img src={item.image} alt={item.destination} />
            <div id="travel-info">
              <h3>
                {item.destination} ({item.days} days)
              </h3>
              <p>
                <i>{item.description}</i>
              </p>
              <p>
                <b>Price:</b> {item.totalCost}€
              </p>
              <div id="labels">
                {item.totalCost <= 350 ? (
                  <div className="label" id="label-green">
                    Great Deal
                  </div>
                ) : item.totalCost >= 1500 ? (
                  <div className="label" id="label-blue">
                    Premium
                  </div>
                ) : (
                  ""
                )}
                {item.allInclusive && (
                  <div className="label" id="label-blue">
                    All Inclusive
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
