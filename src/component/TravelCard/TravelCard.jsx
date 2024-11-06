import "./../TravelCard/TravelCard.css"

const TravelCard = ({ id, destination, days, image, totalCost, description, deleteTravelPlan, allInclusive }) => {

    let priceLabel = ''

    if (totalCost <= 350) {

        priceLabel = <label className="GreatDeal">GreatDeal</label>
    }

    else if (totalCost >= 1500) {

        priceLabel = <label className="Premium">Premium</label>

    }

    let inclusiveLabel = ''

    if (allInclusive) {

        inclusiveLabel = <label className="AllInclusive">All Inlcusive</label>

    }

    return (

        <div className="TravelCard">

            <img src={image} alt="destination pic" />

            <div className="mainData">
                <div className="dataInfo">
                    <h2>{destination} ({days} Days)</h2>
                    <p>{description}</p>
                    <p><strong>Price:</strong>{totalCost}€</p>
                </div>
                <div className="labelSection">
                    <h3>{priceLabel}</h3>
                    <h3>{inclusiveLabel}</h3>
                </div>
                <div className="buttonSection">
                    <button onClick={() => deleteTravelPlan(id)}>Delete</button>
                </div>
            </div>

        </div>

    )

}

export default TravelCard