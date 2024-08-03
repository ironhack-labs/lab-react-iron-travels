export default function TravelPlanCard({ id, location, deleteLocation }) {
  console.log(location);
  return (
    <div className={`location ${id}`}>
      <img
        src={location.image}
        alt={`${location.destination} img`}
        width="250px"
      />
      <h2>
        {location.destination} ({`${location.days}`} days)
      </h2>
      <p>{location.description}</p>
      <p>Price: {location.totalCost} €</p>
      {location.totalCost <= 350 && (
        <div className="greatDeal-tag"> Great Deal </div>
      )}
      {location.totalCost >= 1500 && (
        <div className="Premium-tag"> Premium </div>
      )}
      {location.allInclusive && (
        <div className="allInclusive-tag"> All-inclusive </div>
      )}
      <button onClick={() => deleteLocation(id)}>Delete</button>
    </div>
  );
}
