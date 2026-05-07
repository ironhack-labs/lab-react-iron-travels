

function TravelPlanCard(props){
    if (!props.favPlans || props.favPlans.length === 0) {
        return <p>No favorites yet.</p>;
    }

    return(
        <ul>
            {props.favPlans.map((element) => (
                <li key={element.id}>
                    <h2>{element.destination}<span>{element.days} Days</span></h2>
                    <img src={element.image} alt={element.destination} width={350}/>
                    <h2>Price: {element.totalCost}</h2>
                </li>
            ))}
        </ul>
    );
}


export default TravelPlanCard