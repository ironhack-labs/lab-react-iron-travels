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
      <div className={isFavorite ? "InfoFavorite" : "Info"}>
        <h3>
          {destination} ({days} days)
        </h3>
        {!isFavorite && <i>{description}</i>}

        {isFavorite ? (
          <b>{totalCost} €</b>
        ) : (
          <p>
            <b>Price:</b> {totalCost} €
          </p>
        )}

        {!isFavorite && (
          <>
            {" "}
            <div className="Labels">
              {totalCost <= 350 ? (
                <div className="BlueLabel">Premium</div>
              ) : (
                <div className="GreenLabel">Great Deal</div>
              )}

              {allInclusive ? (
                <div className="BlueLabel">All-Inclusive</div>
              ) : null}
            </div>
            <div className="Buttons">
              <button onClick={removeElement}>Delete</button>
              <button onClick={addToFavorites}>♡</button>{" "}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
