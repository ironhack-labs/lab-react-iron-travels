import travels from "../data/travel-plans.json";
import "./TravelList.css";
export const TravelList = () => {
  return (
    <div>
      {travels.map((travel) => {
        return (
          <div className="card card-flex">
            <div className="img-container">
              <img src={travel.image} alt="Travel picture" />
            </div>
            <div className="infos infos-flex">
              <h2>
                {travel.destination} ({travel.days} Days)
              </h2>
              <p>{travel.description}</p>
              <p>
                <span>Price: </span>
                {travel.totalCost} €
              </p>
              <div className="pastille-container">
                {travel.totalCost <= 350 && (
                  <span className="pastille great-deal">Great Deal</span>
                )}
                {travel.totalCost >= 1500 && (
                  <span className="pastille">Prenium</span>
                )}
                {travel.allInclusive && (
                  <span className="pastille">All Inclusive</span>
                )}
              </div>
            </div>
            <div className="btn-container">
                <button name="delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
