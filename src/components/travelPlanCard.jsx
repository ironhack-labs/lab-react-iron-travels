function TravelPlanCard(props) {
    
    const premiumLabelStyle = {color: "white", padding: "5px", backgroundColor: "#366ACA", borderRadius: "5px"}
    return (
        <div style={{ padding: "20px", borderWidth: "1px", borderStyle: "solid", borderColor: "black", display: "flex", gap: "20px", margin: "10px" }}>
            <img style={{ height: "250px", width: "350px" }} src={props.plan.image} alt="place" />
            <div style={{ textAlign: "left" }}>
                <h3>{props.plan.destination} ({props.plan.days} Days)</h3>
                <p style={{ fontStyle: "italic" }}>{props.plan.description}</p>
                <p><span style={{ fontWeight: "bold" }}>Price: </span>{props.plan.totalCost} €</p>
                <div style={{ display: "flex", gap: "10px" }}>
                    {props.plan.totalCost <= 350 && <label style={{ color: "black", padding: "5px", backgroundColor: "#77BC76", borderRadius: "5px" }}>Great Deal</label>}
                    {props.plan.totalCost >= 1500 && <label style={premiumLabelStyle}>Premium</label>}
                    {props.plan.allInclusive && <label style={premiumLabelStyle}>All-inclusive</label>}
                </div>
                <br />
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <button style={{ color: "black", padding: "5px", backgroundColor: "#ABA9AB", borderRadius: "5px" }} onClick={() => props.onDelete(props.plan.id)}>Delete</button>
                    <button style={{ color: "black", padding: "5px", backgroundColor: "#ABA9AB", borderRadius: "5px" }} onClick={() => props.onFavorite(props.plan)}>💙</button>
                </div>
            </div>
        </div>
    )

}

export default TravelPlanCard