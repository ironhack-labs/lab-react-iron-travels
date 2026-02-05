import travelPlans from "./assets/travel-plans.json";

export default function TravelList() {
  return (
    <div>
      <h1>Travel Plans</h1>

      {travelPlans.map((plan) => (
        <div
          key={plan.id}
          style={{
            border: "1px solid #ccc",
            margin: "20px",
            padding: "20px"
          }}
        >
          <img
            src={plan.image}
            alt={plan.destination}
            width="300"
          />

          <h2>{plan.destination}</h2>
          <p>{plan.description}</p>

          <p><strong>Days:</strong> {plan.days}</p>
          <p><strong>Total Cost:</strong> €{plan.totalCost}</p>

          {/* 🔹 Conditional Labels */}
          <div>
            {plan.totalCost <= 350 && (
              <span style={{ color: "green", marginRight: "10px" }}>
                Great Deal
              </span>
            )}

            {plan.totalCost >= 1500 && (
              <span style={{ color: "purple", marginRight: "10px" }}>
                Premium
              </span>
            )}

            {plan.allInclusive && (
              <span style={{ color: "blue" }}>
                All Inclusive
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
