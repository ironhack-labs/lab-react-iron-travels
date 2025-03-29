export default function TravelPlanCard({plan, clickToDelete}) {
  return (
    <>
      <div key={plan.id} className="travel-card">
            <img className="travel-image" src={plan.image} alt="" />
            <div className="travel-info-container">
                <h2>{plan.destination} ({plan.days} Days)</h2>
                <i>{plan.description}</i>
                <p><strong>Price: </strong>{plan.totalCost}€</p>

                {plan.totalCost <= 350 && <button>Great Deal</button>}
                {plan.totalCost >= 1500 && <button>Premium</button>}
                {plan.allInclusive && <button>All Inclusive</button>}
                <br /><br />
                <button className="delete-btn" onClick={() => clickToDelete(plan.id)}>Delete</button>
            </div>
      </div>
    </>
  );
}