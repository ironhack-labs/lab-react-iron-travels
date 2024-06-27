import { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
  const [travelData, setTravelData] = useState([]);

  // Update the state when the component mounts
  useEffect(() => {
    const updatedTravelPlansData = travelPlansData.map((currentItem) => {
      const { id, destination, image, days, allInclusive, totalCost, description, parts } = currentItem;
      return { id, destination, image, days, allInclusive, totalCost, description, parts };
    });

    setTravelData(updatedTravelPlansData);
  }, []); // Empty dependency array to run the effect once when the component mounts

    function ciao () {

    }

  // Return the JSX for rendering the travel data
  return (
    <div>
      {travelData.map((item) => (
        <div key={item.id} className="cardContainer">
          <img src={item.image} alt={item.destination} />
          <h1>{item.destination} ({item.days} days)</h1>
          {item.allInclusive === true ? <button type="button">All-Inclusive</button> : false}
          {item.totalCost < 350 && (<button type="button">Great Deal</button>)}
          {item.totalCost > 1500 && (<button type="button">Premium</button>)}
          <p>Price: {item.totalCost}€</p>
          <p>Description: {item.description}</p>
          <button type="button" className="deleteButton">Delete</button>
          {/* Add other content to display for each item */}
        </div>
      ))}
    </div>
  );
};

export default TravelList;