import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travel, setTravel] = useState(travelPlansData);
  function labelPrice(onePlan) {
    if (onePlan.totalCost < 350) {
      return <div>Great Deal</div>;
    } else if (onePlan.totalCost) {
      return <div>Premium</div>;
    }
  }

  function handleDelete(id) {
    const filteredArr = travel.filter((onePlan) => {
      if (onePlan.id !== id) {
        return true;
      }
    });
    setTravel(filteredArr);
  }

  return (
    <div>
      {travel.map((onePlan) => {
        return (
          <div className="box" key={onePlan.id}>
            <img src={onePlan.image} />
            <section>
              <h3>
                {onePlan.destination} ({onePlan.days} Days)
              </h3>
              <p>
                <em>{onePlan.description}</em>
              </p>
              <p>
                <strong>Price: </strong> {onePlan.totalCost} €
              </p>
              <div className="labels">
                {onePlan.totalCost < 350 ? (
                  <div className="deal">Great Deal</div>
                ) : null}
                {onePlan.totalCost > 1500 ? (
                  <div className="price">Premium</div>
                ) : null}
                {onePlan.allInclusive && (
                  <div className="price">All-inclusive</div>
                )}
              </div>
              <button onClick={() => handleDelete(onePlan.id)}>Delete</button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TravelList;
