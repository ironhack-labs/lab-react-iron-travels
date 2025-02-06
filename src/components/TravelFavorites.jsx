export default function TravelFavorites({ plan }) {
        return (
            <div className="travel-list" style={{display:"flex", flexDirection:"column", alignItems:"center",border: "1px solid black", padding: "20px"}}>
                <img className="imgTravel" src={plan.image} style={{width:"150px"}} />
                <h2>{plan.destination} {plan.days} Days</h2>
                <p>Price: {plan.totalCost} €</p>
            </div>
        );
}
