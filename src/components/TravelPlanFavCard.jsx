function TravelPlanFavCard({ plan: { image, destination, days, totalCost } }) {
  return (
    <div className="fav-travel-item">
      <img src={image} alt="Travel image" className="fav-travel-image"/>
      <div className="fav-travel-info">
        <h3>{destination} ({days} Day{(days > 1) && "s"})</h3>
        <p className="fav-travel-price"><span>{totalCost} €</span></p>
      </div>
    </div>
  )
}
export default TravelPlanFavCard