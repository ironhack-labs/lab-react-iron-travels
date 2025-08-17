function TravelPlanCard({ eachElement, index, travelPlansList, setTravelPlansList }) {
  const handleClick = (index) => {
    const clonnedList = structuredClone(travelPlansList);

    const modifiedList = clonnedList.splice(index, 1);
    setTravelPlansList(clonnedList);
  };
  return (
    <div className="each-card">
      <img src={eachElement.image}></img>
      <div>
        <h3>{eachElement.destination}</h3>
        <p>{eachElement.description}</p>
        <p>
          <span>Price:</span> {eachElement.totalCost}€
        </p>

        {eachElement.totalCost <= 350 && <span className="greatDeal-btn label">Great Deal</span>}
        {eachElement.totalCost >= 1500 && <span className="premium-btn label">Premium</span>}
        {eachElement.allInclusive && <span className="allInclusive-btn label">All Inclusive</span>}

        <button
          className="delete-btn"
          onClick={() => {
            handleClick(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
