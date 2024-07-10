import React from 'react';
 
function TravelPlanCard(props) {
  const { travelPlan, clickToDelete } = props;
 
  const renderLabels = () => {
    const labels = [];

    if (travelPlan.totalCost <= 350) {
      labels.push(<span key="great-deal" className="label great-deal">Great Deal</span>);
    }

    if (travelPlan.totalCost >= 1500) {
      labels.push(<span key="premium" className="label premium">Premium</span>);
    }

    if (travelPlan.allInclusive) {
      labels.push(<span key="all-inclusive" className="label all-inclusive">All Inclusive</span>);
    }

    return labels;
  };



  return (
    <div className="travel-plan-card">
      <img 
              className='travel-card-img'
              src={travelPlan.image}
              alt={travelPlan.destination}
              style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
            />
      <div className='travel-card-right'>
        <h3>{travelPlan.destination} ({travelPlan.days} Days)</h3>
        <p>{travelPlan.description}</p>
        <p><strong>Price:</strong> {travelPlan.totalCost} €</p>
        <div>
          {renderLabels()}
        </div>
        <br></br>
        <button onClick={() => clickToDelete(travelPlan.id)} className="btn-delete">
        Delete 
        </button>
      </div>
    </div>
  );
}
 
export default TravelPlanCard;