import React from "react";
import travelPlansData from "./data/travel-plans.json";

const TravelList = () => {
    const [travelPlans, setTravelPlans] = useState([]);
  
    useEffect(() => {
      // Fetch data from the JSON file or any other source if needed
      setTravelPlans(travelPlansData);
    }, []);
  
  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlansData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;