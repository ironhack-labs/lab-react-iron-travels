import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {
    const [list , setList]= useState(travelPlansData)
function handleDelete(deletingItem){
    setList(list.filter((currentItem) => currentItem.id != deletingItem.id))
}
    return (
        <div className="list-container">
            {list.map((currentItem) => {
                console.log(currentItem)
                return (
                    <div className="itemContainer" key={currentItem.id}>
                        <div><img className="images" src={currentItem.image} alt="" /></div>
                        <div className="item-info">
                            <div className="item-destination">
                                {currentItem.destination} ({currentItem.days} Days)
                            </div>
                            <div className="description"> {currentItem.description}</div>
                            <div><span className="price">Price:</span> {currentItem.totalCost} €</div>
                            <div className="labels">
                                {currentItem.totalCost <= 350 && <div className="label greatDeal">Great Deal</div>}
                                {currentItem.totalCost >= 1500 && <div className="label">Premium</div>}
                                {currentItem.allInclusive && <div className="label">All Inclusive</div>}
                            
                            </div>
                            <div className="btnContainer"><button className="deleteBtn" onClick={()=>handleDelete(currentItem)}>delete</button>
                            </div>



                        </div>



                    </div>
                )
            })}
        </div>
    );
}

export default TravelList;