import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div>
      {travelPlansData.map((plan) => (
        <div key={plan.id}>
          <h2>{plan.destination}</h2>

          {plan.totalCost <= 350 && <span >Great Deal</span>}{" "}
          {plan.totalCost >= 1500 && <span>Premium</span>}{" "}
          {plan.allInclusive && <span>All Inclusive</span>}

          <p>{plan.description}</p>
          <p><strong>Price:</strong> €{plan.totalCost}</p>
          <p><strong>All-Inclusive:</strong> {plan.allInclusive ? "Yes" : "No"}</p>
          <img src={plan.image} alt={plan.destination} width="300" />
        </div>
        
        
      ))}
       <button onClick={() => handleDelete(plan.id)} style={{ marginTop: "10px" }}>
            Delete
          </button>
    </div>
  );
}

export default TravelList;
