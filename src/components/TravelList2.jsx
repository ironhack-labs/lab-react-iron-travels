import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";

function TravelList2() {
  const [travelplans, setTravelPlans] = useState(travelPlansData);

  const deleteHoliday = (holidayId) => {
    console.log(holidayId);
    const filteredHolidays = travelplans.filter((holiday) => {
      return holiday.id !== holidayId;
    });

    setTravelPlans(filteredHolidays);
  };

  return (
    <>
      <div className="AllBoxes">
        {travelplans.map((travelCard) => {
          return (
            <TravelPlanCard
              key={travelCard.id}
              travelCard={travelCard}
              deleteHoliday={deleteHoliday}
            />
          );
        })}
      </div>
    </>
  );
}

export default TravelList2;
