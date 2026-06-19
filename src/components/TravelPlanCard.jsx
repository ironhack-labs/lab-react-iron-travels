function TravelPlanCard({ plan, onDelete }) {
  return (
    <div className="d-flex border border-2 border-black rounded-1 p-5 m-5">
      <img src={plan.image} alt="image" className="w-50" />

      <div className="w-100 text-start ms-3">
        <h2>
          {plan.destination} ({plan.days} days)
        </h2>
        <p>{plan.description}</p>
        <p>
          <strong>Price:</strong> {plan.totalCost}
        </p>

        <div>
          {plan.totalCost <= 350 && (
            <label
              className="py-1 px-2 rounded m-1 fw-bold"
              style={{ backgroundColor: "#77BC77" }}
            >
              Great Deal
            </label>
          )}
          {plan.totalCost >= 1500 && (
            <label
              className="py-1 px-2 rounded m-1 fw-bold text-white"
              style={{ backgroundColor: "#366BCA" }}
            >
              Premium
            </label>
          )}
          {plan.allInclusive && (
            <label
              className="py-1 px-2 rounded m-1 fw-bold text-white"
              style={{ backgroundColor: "#366BCA" }}
            >
              All Inclusive
            </label>
          )}
        </div>

        <button onClick={() => onDelete(plan.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TravelPlanCard;
