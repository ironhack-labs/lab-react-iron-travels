import "../assets/travelplancard.css"


const FavoritePlanCard = ({plan}) => {
  return (
    <div className="favorite-card">
        <img src={plan.image} alt={plan.destination} className="favorit-card-image" />
        <div className="card-content">
            <h3>{plan.destination}</h3>
            <p className="price">Price: {plan.totalCost}</p>
        </div>
  </div>
  )
}

export default FavoritePlanCard