function TravelCard({plan, deleteItem}) {
  return (
    <div className="item-container">
      <div className="image-container">
        <img src={plan.image} />
      </div>
      <div className="item-description">
        <h3>
          {plan.destination} ({plan.days} Days)
        </h3>
        <p className="description">{plan.description}</p>
        <p className="price">
          Price: <span>{plan.parts[0].cost} €</span>
        </p>
        <div className="labels">
          {plan.parts[0].cost >= 1500 && <p>Premium</p>}
          {plan.allInclusive && <p>All-Inclusive</p>}
        </div>
        {plan.parts[0].cost <= 350 && <p className="great-deal">Great Deal</p>}
      </div>
      <button className="delete-btn" onClick={() => deleteItem(plan.id)}>
        Delete
      </button>
    </div>
  );
}

export default TravelCard;
