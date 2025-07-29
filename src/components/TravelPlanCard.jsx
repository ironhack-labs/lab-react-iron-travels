function TravelPlanCard({
  plan,
  handleClick,
  favouriteList,
  setFavouriteList,
}) {
  const handleFavourites = (plan) => {
    setFavouriteList([...favouriteList, plan]);
    handleClick(plan.id);
  };
  return (
    <>
      <div>
        <div key={plan.id}>
          <img src={plan.image} className="destinationImage"></img>
          <p>{plan.destination}</p>
          <span>{plan.days}</span>
          <p>{plan.description}</p>
          <p>Price:{plan.totalCost}</p>

          {plan.totalCost >= 1500 ? (
            <label>Premium</label>
          ) : (
            <label>GreatDeal</label>
          )}
          {plan.allInclusive && <label>All-Inclusive</label>}
          <button onClick={() => handleClick(plan.id)}>Delete</button>
          <button onClick={() => handleFavourites(plan)}>♡</button>
        </div>
      </div>
    </>
  );
}

export default TravelPlanCard;
