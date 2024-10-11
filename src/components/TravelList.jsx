import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
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
        {travelplans.map((holiday) => (
          <div>
            <div key={holiday.id} className="holidayCard">
              <img src={holiday.image} className="holidayImage" />
              <div className="cardText">
                <h1>
                  {holiday.destination} ({holiday.days} days)
                </h1>
                <h3 className="description">{holiday.description}</h3>
                <h3>
                  <span>Price: </span>
                  {holiday.totalCost} €
                </h3>
                {holiday.totalCost <= 350 ? (
                  <button className="greenButton">Great Deal</button>
                ) : (
                  ""
                )}
                {holiday.totalCost >= 1500 ? (
                  <button className="blueButton">Premium</button>
                ) : (
                  ""
                )}
                {holiday.allInclusive ? (
                  <button className="blueButton">All Inclusive</button>
                ) : (
                  ""
                )}
                <div className="greyButtonBox">
                  <button
                    onClick={() => deleteHoliday(holiday.id)}
                    className="deleteButton"
                  >
                    Delete
                  </button>
                  <button className="favoritesButton">♡</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}

export default TravelList;
