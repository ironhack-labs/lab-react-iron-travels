function TravelPlanCard({plan}) {

    return(
        <>
            <img src={plan.image} alt="plan image" />
            <div className="flex-column">
                <h2>{plan.destination} ( {plan.days} days)</h2>
                <p>{plan.description}</p>
                <p><span className="text-bold">Price: </span>{plan.totalCost} €</p>
                <div className="labels">
                {plan.totalCost <= 350 ? (<label style={{backgroundColor: "lightgreen"}}>Great Deal</label>) : 
                plan.totalCost >= 1500 ? (<label style={{backgroundColor: "lightblue"}}>Premium</label>) 
                : null}
                {plan.parts.map((part, pIndex)=>{
                    if(part.name === "All-Inclusive Package") return (<label key={pIndex} style={{backgroundColor: "lightcoral"}}>Exclusive</label>) ;
                    return null;
                })}
                </div>
            </div>
        </>
    );
}

export default TravelPlanCard;