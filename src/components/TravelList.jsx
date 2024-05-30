import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
const TravelList = () => {
  console.log("here is the data", travelPlansData);
  const [data, setData] = useState(travelPlansData);
  return (
    <div>
      {data.map((onePlan) => {
        return (
          <div key={onePlan.id} className="plan-card">
            <img
              src={onePlan.image}
              alt={onePlan.destination}
              style={{ width: "200px" }}
            />
            <div className="inner-container">
              <h3>
                {onePlan.destination}({onePlan.days} Days)
              </h3>
              <p>{onePlan.description}</p>
              <p>
                <span>Price:</span> {onePlan.totalCost}$
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TravelList;