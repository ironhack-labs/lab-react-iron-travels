export default function TravelCard({ plan, handleDelete, toggle }) {
  return (
    <>
      <img
        src={toggle ? plan.image : ""}
        alt="planimage"
        style={{ height: "30vh", width: "40vw", objectFit: "cover" }}
      />

      <div>
        <p>
          {plan.destination} <span>({plan.days} days)</span>
        </p>
        <p>{plan.description}</p>
        <span>{plan.totalCost}€</span>
        <br />
        {plan.totalCost <= 350 && <span>Great Deal</span>}
        {plan.totalCost >= 1500 && <span>Premium</span>}
        <br />
        {plan.allInclusive && <span>All inclusive</span>}
      </div>
      <button onClick={() => handleDelete(plan.id)}>Delete plan</button>
    </>
  );
}
