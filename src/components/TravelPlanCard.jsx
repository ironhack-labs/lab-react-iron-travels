export default function TravelPlanCard({ itemTravel, travelDel, add }) {
  let etiqueta = "";
  let etiqueta2 = "";
  if (itemTravel.totalCost <= 350) {
    etiqueta = "Great Deal";
  } else if (itemTravel.totalCost >= 1500 && itemTravel.allInclusive) {
    etiqueta = "Premium";
    etiqueta2 = "All-Inclusive";
  }
  return (
    <div key={itemTravel.id}>
      <img src={itemTravel.image} style={{ width: "500px" }} />
      <h2>
        {itemTravel.destination} {itemTravel.days} days
      </h2>
      <h3>{itemTravel.description}</h3>
      <h3>Price: {itemTravel.totalCost} €</h3>
      <p>
        {etiqueta} {etiqueta2}
      </p>
      <button onClick={() => travelDel(itemTravel.id)}>Delete</button>
      <button onClick={()=> add(itemTravel)}>♡</button>
    </div>
  );
}
