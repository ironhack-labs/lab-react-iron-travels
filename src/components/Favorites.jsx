function Favorites(oneTravel) {
  return (
    <article className="cardFavorite">
      <div className="image">
        <img src={oneTravel.image} className="imageFavorite" alt="profile" />
      </div>
      <div className="text">
        <h3 className="details">
          <span className="destination">{oneTravel.destination}</span>
          <span> </span>
          <span className="days">({oneTravel.days} days)</span>
        </h3>
        <p className="price">
          <span className="priceName">Price:</span> {oneTravel.totalCost} €
        </p>
      </div>
    </article>
  );
}

export default Favorites;
