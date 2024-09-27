const TravelPlanCard = (props) => {
  const { oneTravel, deleteButton, favoriteButton } = props;
  const greatDeal = <button>Great Deal</button>;
  const premiumDeal = <button>Premium</button>;
  const allInclusiveDeal = <button>All-Inclusive</button>;

  return (
    <div key={oneTravel.id} className="oneTravel">
      <div className="travelImage">
        <img src={oneTravel.image} alt={`image of ${oneTravel.destination}`} />
      </div>
      <div className="travelInfo">
        <h2>{oneTravel.destination}</h2>
        <p>{oneTravel.description}</p>
        <p>Price: {oneTravel.totalCost} euros</p>
        <span>{oneTravel.totalCost < 350 ? greatDeal : ""}</span>
        <span>{oneTravel.totalCost > 1500 ? premiumDeal : ""}</span>
        <span>{oneTravel.allInclusive ? allInclusiveDeal : ""}</span>
        <div>
          <button onClick={() => deleteButton(oneTravel.id)}>Delete</button>
          <button onClick={() => favoriteButton(oneTravel.id)}>♡</button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanCard;
