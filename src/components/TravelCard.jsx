import"../components/Travelcard.css"

function TravelCard({
  travel: {
    id,
    destination,
    image,
    totalCost,
    description,
  },
}) {
    return (
      <div className="card-container">
        <img width={150} src={image} alt="" />
        <h3>{destination}</h3>
        <p>{description}</p>
        <p>€{totalCost}</p>
        {totalCost <=350 ? <p>Great Deal</p> : totalCost >=1500 && <p>Premium</p>}
      </div>
    );
}

export default TravelCard