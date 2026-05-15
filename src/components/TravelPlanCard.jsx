function TravelPlanCard({ plan }) {
  return (
    <>
      <img
        className="item-list-image"
        src={plan.image}
        alt={plan.destination}
      />
      <div className="container-item-list-description">
        <div className="container-item-list-title-days">
          <h1 className="item-list-title">{plan.destination}</h1>
          <span className="item-list-days">({plan.days} Days)</span>
        </div>
        <div className="container-item-list-description-price-days">
          <p className="item-list-description">{plan.description}</p>
          <p className="item-list-price">Price:</p>
          <span>{plan.totalCost} €</span>
          {/* Travel plans that cost 350 or less should have a label Great Deal.  */}

          {plan.totalCost <= 350 && <div className="labels-great"> Great </div>}
          {/* Travel plans that cost 1500 or more should have the label Premium.  */}
          {plan.totalCost >= 1500 && (
            <div className="labels-premium">Premium </div>
          )}
          {plan.allInclusive && (
            <div className="labels-all-inclusive">All Inclusive </div>
          )}
        </div>
      </div>
    </>
  )
}

export default TravelPlanCard
