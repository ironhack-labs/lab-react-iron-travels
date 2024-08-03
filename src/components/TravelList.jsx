import { useState } from "react";
import TravelPlanCard from "./TravelPlanCard";

import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelData, setTravelData] = useState(travelPlansData);

  const deleteLocation = (locationId) => {
    const filteredLocations = travelData.filter(
      (location) => location.id !== locationId
    );
    setTravelData(filteredLocations);
  };
  return (
    <div className="travel-list">
      {travelData.map((location) => (
        <TravelPlanCard
          key={location.id}
          location={location}
          deleteLocation={deleteLocation}
        />
      ))}
    </div>
  );
}

export default TravelList;
