import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css"
import TravelPlanCard from "./TravelPlanCard";

function TravelList() {
    const [dataTravel, setDataTravel] = useState(travelPlansData)
    const [likesTravel, setLikesTravel] = useState([])
    let copia = [...dataTravel]
    let favoritos = [...likesTravel]
    const handleDelete = (index)=>{
        // copia.splice(index, 1);
        copia = copia.filter((elem)=>elem.id !== index)
        setDataTravel(copia);

    }

    const handleFav = (index)=>{
        favoritos.push(copia[index])
        copia.splice(index, 1);
        // console.log(favoritos)
        // copia = copia.filter((elem)=>elem.id !== index)
        setDataTravel(copia);
        setLikesTravel(favoritos)

    }
    
    return (
        <div className="superContainer">
            <div id="tarjetonesContainer" className="todo">
                {copia.map((elemento, index)=>{
                    if (elemento.totalCost < 350){
                        elemento.label = "Great Deal"
                    }
                    else if(elemento.totalCost > 1500){
                        elemento.label = "Premium"
                    }
                    else{
                        elemento.label = null
                    }
                    return(
                        <section key={index} id="tarjeton">
                            <div className="tarjetonImage">
                                <img src={elemento.image} alt={elemento.description}/>
                            </div>
                            <div className="fichaInfo">
                                <div className="apanio">
                                    <header className="fichaHeader">
                                        <p>{elemento.destination}</p>
                                        <p>({elemento.days} days)</p>
                                    </header>
                                    <p className="descripcion">{elemento.description}</p>
                                    <div className="oferta">
                                        <p className="price">Prices: </p>
                                        <p>{elemento.totalCost} €</p>
                                    </div>
                                    <div className="labelZone">
                                        {elemento.label === "Great Deal" ? <div className="greatDeal ofertas">Great Deal</div> : elemento.label === "Premium" ? <div className="ofertas">Premiun</div> : null}
                                        {elemento.allInclusive && <div className="ofertas">All-Inclusive</div>}
                                    </div>
                                </div>
                                <div className="botonera">
                                    <button className="delete" onClick={()=>handleDelete(elemento.id)}>Delete</button>
                                    <button className="delete" onClick={()=>handleFav(index)}>❤️</button>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
            <TravelPlanCard plan = {likesTravel}/>
        </div>
    )
    }

export default TravelList