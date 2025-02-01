const TravelPlanCard = ({ plan, handleDelete, handleFavorite, favoriteColor }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h3>{plan.destination}</h3>
        <img src={plan.image} alt={plan.destination} className="img-fluid" />
        <p>Días: {plan.days}</p>
        <p>
          {plan.totalCost <= 350 && <span className="badge bg-success">Gran Oferta</span>}
          {plan.totalCost >= 1500 && <span className="badge bg-warning">Premium</span>}
          {plan.allInclusive && <span className="badge bg-info">Todo Incluido</span>}
        </p>
        <p>Costo Total: ${plan.totalCost}</p>
      </div>
      <div>
        <button 
          className="btn btn-warning" 
          style={{ backgroundColor: favoriteColor }} 
          onClick={() => handleFavorite(plan.id)}
        >
          ♡
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(plan.id)}>Eliminar</button>
      </div>
    </li>
  );
};

export default TravelPlanCard;
