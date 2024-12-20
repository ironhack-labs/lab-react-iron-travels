import { useState, useRef } from "react";
import './Travellist.css'
import Favourites from "./Favourites";


function Travellist({data}){

    const [travelData, setTravelData] = useState(data);
    const [favouriteList, setFavouriteList] = useState([]);
    const [show, setShow] = useState(true);
    const [colourArr, setColourArr] = useState(["purple", "blue", "green", "yellow", "orange", "red"]);

    function remove(selected){
        const list = [...travelData];
        const foundIndex = travelData.findIndex(item => item.id === selected);
        list.splice(foundIndex, 1);
        setTravelData(list);
    }

    function randomNumber(){
        return Math.floor(Math.random() * colourArr.length);
    }

    function addToFavourites(event, selected){

        let randomNum = randomNumber();
        let element = event.target.parentElement;
        
        if(element.tagName=='BUTTON'){
            element.style.backgroundColor = colourArr[randomNum];
            element.firstChild.style.display = 'block';
            element.lastChild.style.display = 'none';
        }

        const list = [...travelData];
        let newList = [];
        const found = travelData.find(item => item.id === selected);
        const foundIndex = favouriteList.findIndex(item => item.id === selected);
        if(foundIndex===-1){
            for(let i=0; i<favouriteList.length; i++){
                newList.push(favouriteList[i]);
            }
            newList.push(found);
            setFavouriteList(newList);
        }
    }

    return(
        <div className="travel-layout">
            <div className="travel-plans">
            {travelData.map(dataItem=>(
            <div key={dataItem.id} className="travel-specs">
                <div className="img-container"><img src={dataItem.image} alt="image for travel package"/></div>
                <div className="travel-text">
                    <div className="content">
                        <h1><span>{dataItem.destination}</span>&nbsp;&#10222;<span id="days">{dataItem.days}</span>&nbsp;Days&#10223;</h1>
                        <p className="description">{dataItem.description}</p>
                        <p className="price"><span>Price:</span>&nbsp;{dataItem.totalCost} &euro;</p>
                        <div className="labels">
                            {dataItem.totalCost<=350 && <div className="great-deal">Great Deal</div>}
                            {dataItem.totalCost>=1500 && <div className="premium">Premium</div>}
                            {dataItem.allInclusive && <div className="inclusive">All-Inclusive</div>}
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="delete" onClick={()=>remove(dataItem.id)}>Delete</button>
                        <button className="favourite" onClick={()=>addToFavourites(event, dataItem.id)}>
                            <span style={{display: 'none'}}>&#9829;</span>
                            <span>&#9825;</span>
                        </button>
                    </div>
                </div>
            </div>
            ))}
            </div>
            <div className="favourites">
                <Favourites favourites={favouriteList}/>
            </div>
        </div>
    )
}
export default Travellist