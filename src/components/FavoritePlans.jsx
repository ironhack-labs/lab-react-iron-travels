function FavoritePlans({ plan }) {
  return (
    <li
      key={plan.id}
      style={{
        display: "flex",
        gap: "20px",
        border: "1px solid black",
        width: "fit-content",
      }}
    >
      <img
        src={plan.image}
        alt="Desttination image"
        style={{ width: "200px" }}
      />
      <div style={{ width: "400px", textAlign: "left" }}>
        <h2>
          {plan.destination} ({plan.days} Days)
        </h2>
        <p>Price: {plan.totalCost}€</p>
      </div>
    </li>
  );
}

export default FavoritePlans;
