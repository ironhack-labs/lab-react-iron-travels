import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function Favorites() {
  const [travelplans, setTravelPlans] = useState(travelPlansData);

  const favoriteHoliday = (holidayId) => {
    const favoritedHolidays = travelplans.filter((holiday) => {
      return holiday.id == holidayId;
    });
    setTravelPlans(favoritedHolidays);
  };

  return (
    <>
      <div className="AllBoxes">
        <h1 className="Favorites">Favorites</h1>
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
              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
}

export default Favorites;
