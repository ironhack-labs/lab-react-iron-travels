import "./Favorites.css";

const Favorites = (props) => {
  return (
    <div className="favorite-list">
      <img src={props.favorite.image} alt="image" className="picture" />
      <h1 className="title-favorite">
        {props.favorite.destination} ({props.favorite.days} days)
      </h1>
      <p>{props.favorite.totalCost} €</p>
    </div>
  );
};

export default Favorites;
