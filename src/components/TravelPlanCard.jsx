import "./TravelList.css"


function TravelPlanCard(props) {
    console.log(props.plan)
  return (
    <div className="secundario">
        <p id="titular-fav">Favoritos</p>
        {props.plan?.map((elemento, index)=>{
            return(
                <section key={index} id="favorito_sec">
                    <div className="tarjetonImage_sec">
                        <img src={elemento.image} alt={elemento.description}/>
                    </div>
                    <header className="fichaHeader_sec">
                        <p>{elemento.destination}</p>
                        <p>({elemento.days} days)</p>
                    </header>
                    <div className="oferta_sec">
                        <p>{elemento.totalCost} €</p>
                    </div>
                </section>
            )
        })}
    </div>
  )
}

export default TravelPlanCard