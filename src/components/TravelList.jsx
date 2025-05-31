import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  return (
    <div id="Travel List" style={{ maxWidth: "65%", minWidth: "750px" }}>
      {travelPlansData.map((plan) => (
        <div key={plan.id} style={{ display: "flex", margin: "2em", padding: "2em", border: "1px solid black", boxSizing: "border-box" }}>
          <div>
            <img src={plan.image} alt={plan.destination} style={{ maxWidth: "25em" }}/>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "2em"}}>
            <h3>{`${plan.destination} (${plan.days} Days)`}</h3>
            <p><i>{plan.description}</i></p>
            <p><b>Price:</b>{`${plan.totalCost}€`}</p>
            <div className="d-flex gap-2">
              {plan.totalCost <= 350 && ( <span className="badge text-bg-success">Great Deal</span> )}
              {plan.totalCost >= 1500 && (<span className="badge text-bg-primary">Premium</span> )}
              {plan.allInclusive && ( <span className="badge text-bg-primary">All-inclusive</span> )}
            </div>
          </div>          
        </div>
      ))}
    </div>
  )
}

export default TravelList;