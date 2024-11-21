import './../TravelCard/TravelCard.css'

const TravelCard = ({ travelInfo }) => {

  return (
    <div className="TravelCard" >

      <img src={travelInfo.image} alt="" />
      <h2>{travelInfo.destination} {travelInfo.days} days</h2>
      <p>{travelInfo.description}</p>
      <p><strong>Price:</strong> {travelInfo.totalCost} €</p>



    </div >
  )
}

export default TravelCard