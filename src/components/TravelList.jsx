import React, { useState } from 'react'
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from './TravelPlanCard';

function TravelList() {
  const [travelList, setTravelList] = useState(travelPlansData);

  return (
    <div id="travel-list">
      {travelList.map((entry, index) => (
        <TravelPlanCard plan={entry} travelList={travelList} setTravelList={setTravelList} />
        ))}
    </div>
  )
}

export default TravelList