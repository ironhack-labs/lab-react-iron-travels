const getLabel = (travel) => {
  let label;
  if (travel.totalCost >= 1500) {
    label = <span>Premium</span>;
  } else if (travel.totalCost <= 350) {
    label = <span>Great Deal</span>;
  }
  return label;
};

export default function TravelPlanCard({ travel, onDelete }) {
  return (
    <div>
      <img style={{ width: "500px" }} src={travel.image} />
      <h2>{travel.destination}</h2>
      <p>{travel.description}</p>
      <p>
        <b>Price: {travel.totalCost} €</b>
      </p>
      {/* Another way to do it: */}
      {/* {travel.totalCost >= 1500 ? <span>Premium</span> : null}
            {travel.totalCost <= 350 ? <span>Great Deal</span> : null} */}
      {getLabel(travel)}
      {travel.allInclusive ? <span>All-inclusive</span> : null}
      <button onClick={() => onDelete(travel.id)}>Delete</button>
    </div>
  );
}
