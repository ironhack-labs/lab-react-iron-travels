const TravelList = ({ travelPlans, onDelete }) => {
  return (
    <div>
      {travelPlans.map((eachPlan) => (
        <div key={eachPlan.id}>
          <img src={eachPlan.image} alt={eachPlan.destination} />
          <h2>{eachPlan.destination}</h2>
          <p>Total Cost: ${eachPlan.totalCost}</p>

          <div>
            {eachPlan.totalCost <= 350 && <span>Great Deal</span>}
            {eachPlan.totalCost >= 1500 && <span>Premium</span>}
            {eachPlan.allInclusive && <span>All Inclusive</span>}
          </div>
          <button onClick={() => onDelete(eachPlan.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
