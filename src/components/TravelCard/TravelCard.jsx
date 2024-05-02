import './../TravelCard/TravelCard.css'
const TravelCard = ({ travelInfo, deleteTravel }) => {
    return (
        <div className="ContainerDestination">
            <h2>{travelInfo.destination} ({travelInfo.days} days)</h2>
            <img src={travelInfo.image} alt='image' />
            <h3>Price: {travelInfo.totalCost}$</h3>
            <p>Description :{travelInfo.description}</p>
            <div className='oferts'>
                {travelInfo.totalCost <= 360 && <span>Great Deal</span>}
                {travelInfo.totalCost >= 1500 && <span>Premium</span>}
                {travelInfo.allInclusive && <span>All Inclusive</span>}
            </div>
            <button className='btn-delete' onClick={() => deleteTravel(travelInfo.id)}>DELETE THIS TRAVEL OF YOUR LIST</button>

        </div>
    )
}
export default TravelCard