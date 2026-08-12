import React from 'react'

function TravelPlanCard({plan, travelList, setTravelList}) {
  const handleDeleteEntry = () => {
    setTravelList(travelList.filter(x => x !== plan));
  };

  return (
    <div key={plan.id} className="travel-list-entry">
      <img src={plan.image} />
      <div className="travel-details">
        <h3>{plan.destination} ({plan.days} Days)</h3>
        <p>{plan.description}</p>
        <p><span className="travel-details-label">Price: </span>{plan.totalCost} €</p>
        <div className="entry-tags">
          {plan.totalCost <= 350 && <div className="geat-deal-tag">Great Deal</div>}
          {plan.totalCost >= 1500 && <div className="premium-tag">Premium</div>}
          {plan.parts.some(x => x.name === "All-Inclusive Package") && <div className="all-inclusive-tag">All-Inclusive</div>}
        </div>

        <button className="delete-button" onClick={handleDeleteEntry}>Delete</button>
      </div>
    </div>
  )
}

export default TravelPlanCard