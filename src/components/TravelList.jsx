import travelPlansData from '../assets/travel-plans.json';
import { useState } from 'react';

function TravelList() {
  const [travelArr, setTravelArr] = useState(travelPlansData);

  const displayLabel = (cost) => {
    if (cost <= 350) {
      return <div className="great-deal">Great Deal</div>;
    } else if (cost >= 1500) {
      return <div className="premium">Premium</div>;
    }
  };

  const deleteTravel = (travelToDelete) => {
    const newTravelArr = travelArr.filter((travelObj) => travelObj.id !== travelToDelete);
    setTravelArr(newTravelArr);
  };

  return travelArr.map((elementObj) => {
    return (
      <div className="TravelList" key={elementObj.id}>
        <div className="img-container">
          <img src={elementObj.image} alt="destination image" />
        </div>
        <div className="text-container">
          <h2>
            {elementObj.destination} ({elementObj.days} Days)
          </h2>
          <p>{elementObj.description}</p>
          <p>
            <b>Price:</b> {elementObj.totalCost}
          </p>
          <div className="label-container">
            {displayLabel(elementObj.totalCost)}
            {elementObj.allInclusive && <div className="all-inclusive">All-Inclusive</div>}
          </div>
          <div>
            <button
              className="delete-btn"
              onClick={() => {
                deleteTravel(elementObj.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  });
}

export default TravelList;
