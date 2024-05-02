

const TravelCard = ({ tripInfo }) => {

    return (
        <div className="ProductsList">
            <div>
                <div className="destination">{tripInfo.destination}</div>
                <img > {tripInfo.image} </img>
                <div className="days"> {tripInfo.days} </div>
                <div className="allInclusive"> {tripInfo.allInclusive} </div>
                <div className="totalCost"> {tripInfo.totalCost}</div>
                <div className="description">{tripInfo.description}</div>
                <div className="parts">{tripInfo.parts}</div>

            </div>

            <hr />
        </div>
    )
}

export default TravelCard