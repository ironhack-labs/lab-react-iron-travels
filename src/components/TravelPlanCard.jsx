import { FaHeart, FaHeartBroken } from "react-icons/fa";
import PlanCardPart from "./PlanCardPart";
import { useState } from "react";

const TravelPlanCard = ({
  handleDelete,
  handleFavourite,
  id,
  image,
  destination,
  description,
  days,
  allInclusive,
  totalCost,
  parts,
}) => {
  const [favourited, setFavourited] = useState(false);
  return (
    <div className="card">
      <img className="card__image" src={image} alt={destination} />
      <div className="card__info">
        <h1 className="card__title">
          {destination} ({days} days)
        </h1>
        <p className="card__description">{description}</p>
        <p className="card__price">
          <strong>Price:</strong> {totalCost} €
        </p>
        <div className="card__features">
          {totalCost < 350 && <div className="card__feature">Great Deal</div>}
          {totalCost > 1500 && <div className="card__feature">Premium</div>}
          {allInclusive && <div className="card__feature">All Inclusive</div>}
        </div>
        {parts.map((part, index) => (
          <PlanCardPart key={index + part.cost} {...part} />
        ))}
        <div className="card__buttons">
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className="card__button"
          >
            Delete
          </button>
          <button
            onClick={() => (handleFavourite(id), setFavourited(!favourited))}
            type="button"
            className="card__button"
          >
            {favourited ? <FaHeartBroken /> : <FaHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelPlanCard;
