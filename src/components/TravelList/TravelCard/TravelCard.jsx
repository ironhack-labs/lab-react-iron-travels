import "./TravelCard.css"


const TravelCard = ({ travelInfo }) => {

    return (
        <div className="TravelCard">
            <img src={travelInfo.image} alt="Paris image" />
            <h3>{travelInfo.destination} ({travelInfo.days} Days)</h3>
            <p>{travelInfo.description}</p>
            <p>Price: {travelInfo.totalCost}€</p>
        </div>

    )
}
export default TravelCard