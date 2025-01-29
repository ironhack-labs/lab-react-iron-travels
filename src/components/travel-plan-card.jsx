function TravelPlanCard({
  plan,
  handleDeleteButton,
  handleFavButton,
  isFavoriteView,
}) {
  return (
    <li className="mb-2" key={plan.id}>
      <div
        className={`card ${isFavoriteView ? "text-center" : ""}`}
        style={{ maxWidth: "600px" }}
      >
        {isFavoriteView ? (
          // Fav Card Style
          <>
            <img
              className="img-fluid mt-3"
              src={plan.image}
              alt={`Image of ${plan.destination}`}
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {plan.destination} ({plan.days} days)
              </h5>
              <p className="card-text fst-italic">{plan.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  <span className="fw-bold">Price: {plan.totalCost} €</span>
                </small>
              </p>
            </div>
          </>
        ) : (
          // Main Card Style
          <div className="row g-0">
            <div className="col-md-6 d-flex p-3">
              <img
                className="img-fluid align-self-center"
                src={plan.image}
                alt={`Image of ${plan.destination}`}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body d-flex-column text-start">
                <h5 className="card-title mb-2">
                  {plan.destination} ({plan.days} days)
                </h5>
                <p className="card-text fst-italic mb-2">{plan.description}</p>
                <p className="card-text mb-2">
                  <small className="text-muted">
                    <span className="fw-bold">Price: {plan.totalCost} €</span>
                  </small>
                </p>
                <span className="mb-4 d-flex justify-content-between">
                  {plan.totalCost <= 350 && (
                    <span className="badge bg-success">Great Deal</span>
                  )}
                  {plan.totalCost >= 1500 && (
                    <span className="badge bg-warning">Premium</span>
                  )}
                  {plan.allInclusive && (
                    <span className="badge bg-primary">All Inclusive</span>
                  )}
                </span>
                <div className="d-flex">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDeleteButton(plan.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn  btn-secondary ms-2"
                    onClick={() => handleFavButton(plan)}
                  >
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
}

export default TravelPlanCard;
