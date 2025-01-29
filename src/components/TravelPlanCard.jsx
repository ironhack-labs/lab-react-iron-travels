export default function TravelPlanCard({ plan, onDelete }) {
  return (
    <>
      <div key={plan.id} className={"box"}>
        <div>
          <img className={"dest-img"} src={plan.image} />
        </div>
        <div className={"info"}>
          <h3>
            {plan.destination} ({plan.days} days)
          </h3>
          <p>{plan.description}</p>
          <p>
            <strong>Price</strong> : {plan.totalCost} euro{" "}
          </p>
          <div className={"deals"}>
            {(plan.totalCost < 350 ? true : false) && <p id={"deal"}>Deal Available!</p>}
            {(plan.totalCost > 1500 ? true : false) && <p id={"premium"}>Premium!</p>} {plan.allInclusive && <p id={"allInc"}>All Inclusive!</p>}
          </div>
          <button onClick={() => onDelete(plan.id)} id={"delete"}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
