
const FavouriteCard = ({plan}) => {
  return (
    
    <div className="fav-card">
        <img src={plan.image} alt="Destination Image" className="dest-fav-image"/>
        
        <h4>{plan.destination} ({plan.days} Days)</h4>

        <div id="travel-price">
            <h4>{plan.totalCost} €</h4>
        </div>
    </div>
  )
}

export default FavouriteCard