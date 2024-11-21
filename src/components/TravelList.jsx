//CSS
import "./TravelList.css";

//ASSETS
import travelPlansData from "../assets/travel-plans.json";

//HOOKS
import { useState } from "react";

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);
  const updatedTravelList = (elementId) => {
    const travelListCopy = [...travelList];
    const filteredTravelList = travelListCopy.filter(
      (element) => element.id !== elementId
    );
    return filteredTravelList;
  };
  return (
    <section className="card-wrapper">
      {travelList.map(
        ({
          id,
          destination,
          image,
          days,
          allInclusive,
          totalCost,
          description,
          parts,
        }) => {
          return (
            <article key={id}>
              <img src={image} alt="image" />
              <div className="info">
                <h2>
                  {destination} ({days} Days)
                </h2>
                <p>{description}</p>
                <div>
                  <b>Price: </b>
                  <span>{totalCost}€</span>
                </div>
                <div className="labels-wrapper">
                  {totalCost <= 350 && (
                    <label className="great-deal">Great Deal</label>
                  )}
                  {totalCost >= 1500 && (
                    <label className="premium">Premium</label>
                  )}
                  {allInclusive && <label>All Inclusive</label>}
                </div>
                <button onClick={() => setTravelList(updatedTravelList(id))}>
                  Delete
                </button>
              </div>
            </article>
          );
        }
      )}
    </section>
  );
}

export default TravelList;
