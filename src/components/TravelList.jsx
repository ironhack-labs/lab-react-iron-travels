import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [data, setData] = useState(travelPlansData);

  return (
    <div>
      <h2>Travel list</h2>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="pic" style={{ width: 300 }} />
            <h3>
              {item.destination} ({item.days} days)
            </h3>
            <i>{item.description}</i>
            <p>Price: {item.totalCost} €</p>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
