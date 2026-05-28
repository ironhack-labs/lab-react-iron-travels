import "./TravelList.css";
export const TravelPlanCard = (props) => {
  const {
    plan: travel,
    deleteFunction: deleteTravel,
    favoriteFunction: favoriteTravel,
  } = props;
  return (
    <>
      <div key={travel.id} className="card card-grid">
        <div className="img-container">
          <img src={travel.image} alt="Travel picture" />
        </div>
        <div className="infos infos-flex">
          <h3>
            {travel.destination} ({travel.days} Days)
          </h3>
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
          <button
            name="delete"
            className="buttons"
            onClick={() => deleteTravel(travel.id)}
          >
            Delete
          </button>
          <button
            name="favorite"
            className="buttons"
            onClick={() => favoriteTravel(travel.id)}
          >
            ♡
          </button>
        </div>
      </div>
    </>
  );
};
