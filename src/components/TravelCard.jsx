function TravelCard({ plan, deleteCard, addToFavorites }) {
  return (
    <div className="travel-card">
      <img className="card-image" src={plan.image} alt="City image" />
      <div className="travel-card-info">
        <h3>
          {plan.destination} ({plan.days} Days)
        </h3>
        <p>{plan.description}</p>
        <p>
          <b>Price</b>: {plan.totalCost} €
        </p>
        <div className="label-container">
          {plan.totalCost <= 350 && <label>Great deal</label>}
          {plan.totalCost >= 1500 && <label>Premium</label>}
          {plan.allInclusive && <label>All-Inclusive</label>}
        </div>
        <div className="btn-container">
          <button onClick={deleteCard}>Delete</button>
          <button onClick={addToFavorites}>♡</button>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;

// function TravelCard({ imgURL, destination, days, plan, price, incl, deleteCard }) {

//   return (
//     <div className="travel-card">
//       <img className="card-image" src={imgURL} alt="City image" />
//       <div className="travel-card-info">
//         <h3>
//           {destination} ({days} Days)
//         </h3>
//         <p>{plan}</p>
//         <p>
//           <b>Price</b>: {price} €
//         </p>
//         <div className="label-container">
//           {price <= 350 && <label>Great deal</label>}
//           {price >= 1500 && <label>Premium</label>}
//           {incl && <label>All-Inclusive</label>}
//         </div>
//         <div className="btn-container">
//           <button onClick={deleteCard}>Delete</button>
//           <button>♡</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TravelCard;
