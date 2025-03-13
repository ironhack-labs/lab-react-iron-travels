function TravelPlanCard(props) {
    const {onePlan, handleDelete} = props;
    
  return (
    <div className = "ListCard">
        <img src={onePlan.image} alt="destination image" />
        <div className = "L1-description">
            <h1>{onePlan.destination} ({onePlan.days} days)</h1>
            <div>{onePlan.description}</div>
            <div>cost: {onePlan.totalCost}</div>
            <div className = "condition">
            {onePlan.totalCost <= 350 && <div className = "deal">"Great Deal!"</div>}
            {onePlan.totalCost >= 1500 && <div className = "deal">"Premium!"</div>}
            {onePlan.allInclusive === true && <div className = "deal">"All Inclusive!"</div>}
            </div>
            <button className = "delete-btn" onClick={()=>{
                handleDelete(onePlan.id);
            }}>Delete</button>
        </div>
        </div>
  )
}

export default TravelPlanCard