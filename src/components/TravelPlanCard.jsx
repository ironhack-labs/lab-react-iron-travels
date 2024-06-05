import classes from "../styles/travelList.module.css";

function TravelPlanCard({ plan, handleDelete }) {
  return (
    <li key={plan.id} className={classes.ctn}>
      <img src={plan.image} className={classes.img} alt="" />
      <div>
        <h2>{plan.destination}</h2>
        <p>{plan.description}</p>
        <p>Duration: {plan.days} days</p>
        <p>
          <strong>Price: </strong>
          {plan.totalCost} €
        </p>
        <div className={classes.conditions}>
          {plan.totalCost >= 1500 && (
            <p className={classes.blueLabel}>Premium</p>
          )}
          {plan.allInclusive && (
            <p className={classes.blueLabel}>All-inclusive</p>
          )}

          {plan.totalCost <= 350 && (
            <p className={classes.greenLabel}>Great Deal</p>
          )}
        </div>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TravelPlanCard;
