export default function TravelPlanCard({ plan }) {
  return (
    <>
      <li style={{ border: "1px #aaa solid", width: "400px" }}>
        {console.log(1111)}
        <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
          <img src={plan.image} width={"100%"} style={{ size: "cover" }} />
        </div>
        <h3>
          {plan.destination}
          <span>({plan.days} days)</span>
        </h3>
        <h3>{plan.totalCost}€</h3>
      </li>
    </>
  );
}
