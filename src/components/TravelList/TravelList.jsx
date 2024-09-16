import TravelPlansData from './../../assets/travel-plans.json'
import { useState } from 'react'

const TravelCard = () => {

    const [travelList, setTravel] = useState(TravelPlansData)



    function generatePriceLabel(price) {
        if (price <= 350) {
            return <span className="green">GreatDeal</span>;
        } else if (price > 1500) {
            return <span className="blue">Premium</span>;
        }
    }

    function allInclusive(data) {
        if (data === true) {
            return <span className='blue'> All-inclusive</span>
        }
    }

    const clickToDelete = travelIdToDelete => {

        const filteredTravel = travelList.filter(elm => {
            return elm.id != travelIdToDelete
        })

        setTravel(filteredTravel)
    }
    return (
        travelList.map(TravelPlansData => (
            <div className="TravelCard" key={TravelPlansData.id}>
                <img src={TravelPlansData.image} alt="destination-image" />
                <div className="TravelCardText">
                    <h2>{TravelPlansData.destination}({TravelPlansData.days} Days)</h2>
                    <p>{TravelPlansData.description}</p>
                    <p>Price: {TravelPlansData.totalCost}</p>
                    <p>{generatePriceLabel(TravelPlansData.totalCost)}</p>
                    <p>{allInclusive(TravelPlansData.allInclusive)}</p>
                    <button onClick={() => clickToDelete(TravelPlansData.id)} className="btn-delete" >Delete
                    </button>
                </div>
            </div>
        ))
    )
}
export default TravelCard