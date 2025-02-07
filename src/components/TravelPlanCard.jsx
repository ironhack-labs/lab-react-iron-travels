export default function TravelPlanCard({ plan, deletePlan }) {
    console.log(plan)
  return (
    <>
      <div key={plan.id}>
        <img src={plan.image} alt="place image" />
        <h2>
          {plan.destination} ({plan.days} days)
        </h2>
        <p>{plan.description}</p>
        <h3>Price: {plan.totalCost}</h3>
        <p className="dealt">{plan.totalCost <= 350 && "Great Deal"}</p>
        <p className="premium">{plan.totalCost >= 1500 ? "Premium" : ""}</p>
        <p className="inclusive">{plan.allInclusive && "All Inclusive"}</p>
        <button onClick={() => deletePlan(plan.id)}>Delete</button>
      </div>
    </>
  );
}
