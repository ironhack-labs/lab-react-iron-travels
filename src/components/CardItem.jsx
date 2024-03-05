

const CardItem = ({apartment,allTravel,setTravels}) => {

    const deleteTravel = () => {
      setTravels(allTravel.filter((current) => current.id != apartment.id))
    }
  return (
    <div className="card-travel">
        <img src={apartment.image} alt="" />
        <div>

          <h2>{apartment.destination} {'('}{apartment.days} Days{")"}</h2>
        
          <p>{apartment.description}</p>
          <p><b>Price:</b> {apartment.totalCost}</p>

          <label>{apartment.totalCost <= 350 ? <p>Great Deal</p> : ""}</label>
          <label>{apartment.totalCost >= 1500 ? <p>Premium</p> : ""}</label>
          <label>{apartment.allInclusive == true ? <p>All Inclusive</p> : ""}</label>
          <button onClick={deleteTravel}>Delete</button>
        </div>
    </div>
  )
}

export default CardItem
