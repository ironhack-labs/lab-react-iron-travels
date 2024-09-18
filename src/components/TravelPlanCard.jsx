function TravelPlanCard({plan, handleDelete}) {

  const {key, image, destination, days, description, totalCost, allInclusive} = plan

  const greatDealStyle = { backgroundColor: "#77BC77" }
  const premiumStyle = { backgroundColor: "#366bca", color: "white" }

  

  return (
    <div className="travel-container" key={key}>
      <img src={image} alt="Destination Image" />

      <div className="travel-right">
        <div className="travel-info">
          <h2>{destination} ({days} Days)</h2>
          <p style={{fontStyle: "italic"}}>{description}</p>
          <h4>Price: <span style={{fontWeight: "normal"}}>{totalCost} €</span></h4>

          <div className="labels">
            {totalCost <= 350 ? (<h5 className="price-label" style={greatDealStyle}>Great Deal</h5>)
              : totalCost >= 1500 ? (<h5 className="price-label" style={premiumStyle}>Premium</h5>)
              : null}
            {allInclusive ? (<h5 className="price-label" style={premiumStyle}>All-Inclusive</h5>)
              : null}
          </div>
        </div>

        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TravelPlanCard