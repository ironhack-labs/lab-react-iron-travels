import travelPlans from "../assets/travelPlans.json";

export default function TravelList() {
  return (
    <div>
      <h1>Travel Plans</h1>

      {travelPlans.map(plan => (
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
          <p>
            <strong>All Inclusive:</strong>{" "}
            {plan.allInclusive ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
}
