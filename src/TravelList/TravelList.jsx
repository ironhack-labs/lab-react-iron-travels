import { useState } from 'react'
import './TravelList.css'
import TravelPlansData from "./../assets/travel-plans.json"


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

    // const clickToDelete = travelIdToDelete => {

    //     const filteredTravel = travel - plans.filter(elm => {
    //         return elm.id != travelIdToDelete
    //     })

    //     return (filteredTravel)

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
                    <button onClick={() => clickToDelete(movie.id)} className="btn-delete" >Delete
                    </button>
                </div>
            </div>
        ))
    )
}

export default TravelCard