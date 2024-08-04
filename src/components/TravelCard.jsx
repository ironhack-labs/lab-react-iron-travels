import "./TravelCard.css";

export default function TravelCard({ item, deleteFunc }) {
  return (
    <div className="travel-card">
      <img
        src={item.image}
        alt={item.destination}
        className="travel-card-img"
      />
      <div className="travel-card-content">
        <h2 className="travel-card-destination">{item.destination}</h2>
        <p className="travel-card-description">{item.description}</p>
        <p className="travel-card-days">Days: {item.days}</p>
        <p className="travel-card-price">Price: {item.totalCost}€</p>
        <button
          onClick={() => deleteFunc(item.id)}
          className="travel-card-delete-btn"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
