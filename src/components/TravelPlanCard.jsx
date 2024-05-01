import { useState } from "react";


export default function TravelPlanCard({plan, handleDelete, handleFav, index}) {
  let element = plan;
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [indexColor, setIndexColor] = useState(0)

  function changeColor () {
    setIndexColor ( (prev) => (prev +1) % 5)
  }

return ( 
  <div className="main-container">       
            <img src={element.image} />
            <div className="information">
                <h2>{element.destination}.  {element.days} days</h2>
                <h3> <i>{element.description} </i></h3>
                <h4>Price: {element.totalCost} €</h4>
                
                <div className="extra-labels">
                {element.totalCost <= 350?
                  <div className="label" style={{backgroundColor:"green"}} >Great Deal</div>
                  : null
                }
                {element.totalCost >= 1500?
                  <div className="label" style={{backgroundColor:"green"}}>Premium</div>
                  : null
                }
                {element.allInclusive?
                  <div className="label" style={{backgroundColor:"blue"}}>All inclusive</div>
                  : null
                }
                </div>

                <div id="final-buttons">
                   <button className="extra-btn" onClick={() => handleDelete(element.id) }>Delete</button>
                   <button  id={"fav_" + index}
                            className="extra-btn"
                            style = {{backgroundColor: colors[indexColor]}}
                            onClick={() => {
                              handleFav(element, index);
                              changeColor();
                            }}
                   >
                  Fav
                  </button>
                </div>
            </div>
  </div>
)
}