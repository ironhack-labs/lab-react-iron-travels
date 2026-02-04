function FavoriteCard(props) {
    return (
        <div style={{ padding: "20px", borderWidth: "1px", borderStyle: "solid", borderColor: "black", display: "flex", flexDirection: "column", gap: "20px", margin: "10px" }}>
            <img style={{ height: "100px", width: "250px" }} src={props.plan.image} alt="place" />
            <h4>{props.plan.destination} ({props.plan.days} Days)</h4>
            <h4>{props.plan.totalCost} €</h4>
        </div>
    )
}

export default FavoriteCard