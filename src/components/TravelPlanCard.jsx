export default function TravelPlanCard({
  plan,
  removeElement,
  addToFavorites,
  isFavorite,
}) {
  const { image, destination, description, totalCost, allInclusive, days } =
    plan;
  return (
    <div className={isFavorite ? "Favorite" : "Plan"}>
      <img
        className={isFavorite ? "VerticalImage" : "HorizontalImage"}
        src={image}
      />
      <div>
        <h3>
          {destination}({days} days)
        </h3>
        {!isFavorite && <p>{description}</p>}

        <p>Price: {totalCost}</p>
        {!isFavorite && (
          <>
            {" "}
            <div className="Labels">
              <div>{totalCost <= 350 ? "Great Deal" : "Premium"}</div>
              {allInclusive ? <div>All-Inclusive</div> : null}
            </div>
            <button onClick={removeElement}>Delete</button>
            <button onClick={addToFavorites}>♡</button>{" "}
          </>
        )}
      </div>
    </div>
  );
}
