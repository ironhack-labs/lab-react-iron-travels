function TravelPlanCard({ card, handleRemoveCard }) {
  const { id, destination, image, days, totalCost, description, allInclusive } =
    card;
  const greenOrBlueStyle =
    totalCost >= 1500 ? "blue" : totalCost <= 350 ? "green" : "";

  return (
    <div className="card">
      <img src={image} />
      <section className="aside">
        <article>
          <h3>
            {destination} ({days} days)
          </h3>
          <p className="description">{description}</p>
          <p>
            <b>Price: </b>
            {totalCost} €
          </p>
          <section className="labels">
            <label className={greenOrBlueStyle}>
              {totalCost >= 1500
                ? "Premium"
                : totalCost <= 350
                ? "Great Deal"
                : ""}{" "}
            </label>
            {allInclusive && (
              <label className={greenOrBlueStyle}>All-inclusive</label>
            )}
          </section>
        </article>
        <button
          className="delete"
          onClick={() => {
            handleRemoveCard(id);
          }}
        >
          Delete
        </button>
      </section>
    </div>
  );
}

export default TravelPlanCard;
