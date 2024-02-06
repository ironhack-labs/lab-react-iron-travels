import TravelPlansData from './../../assets/travel-plans.json'
import { useState } from 'react'
import './../TravelList/TravelList.css'

const TravelCard = () => {

    const [travelList, setTravel] = useState(TravelPlansData)

    function generatePriceLabel(price) {

        if (price <= 350) {
            return <span className="green">GreatDeal</span>;
        } else if (price > 1500) {
            return <span className="blue">Premium</span>;
        }
    }
    function allIclusive(data) {
        if (data === true) {
            return <span className="blue">All-inclusive</span>;
        }
    }


    const deleteTravel = (travelIdToDelete) => {
        const filteredTravels = travelList.filter(elm => {
            return elm.id != travelIdToDelete
        })

        setTravel(filteredTravels)
    }

    return (
        travelList.map(TravelPlansData => (
            <article className="TravelList" key={TravelPlansData.id}>
                <img className='cityImage' src={TravelPlansData.image} alt="destination-image" />
                <div className="TravelListText">
                    <h2>{TravelPlansData.destination} ({TravelPlansData.days} Days)</h2>
                    <p className='description'>{TravelPlansData.description}</p>
                    <p>Price: {TravelPlansData.totalCost} €</p>
                    <p>{generatePriceLabel(TravelPlansData.totalCost)}</p>
                    <p>{allIclusive(TravelPlansData.allInclusive)}</p>
                    <button className="btn-delete" onClick={() => deleteTravel(TravelPlansData.id)}>Delete</button>
                </div>
            </article>
        ))
    )
}
export default TravelCard