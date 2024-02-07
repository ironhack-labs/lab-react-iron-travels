import { useState } from 'react';
import TravelListData from '../assets/travel-plans.json'

function TravelList() {

let [travelListData, updateList]= useState(TravelListData);

function deleteTravelItem(id){
 let newTravelList =  travelListData.filter((travel)=>{
    return travel.id !== id;
 })
 updateList(newTravelList);
}

    return (<section className="travel-list">
        {travelListData.map((travel) => {
            let dealName = "";
            let dealClass="";
            let allInc = false;
            if (travel.totalCost <= 350) {
                dealName = "Great Deal";
                dealClass = "deal"
            }
            else if (travel.totalCost >= 1500) {
                dealName = "Premium";
                dealClass ="premium";
            }

            return <div key={travel.id} className='travel-item'>
                <div>
                    <img className='travel-image' src={travel.image} />
                </div>
                <div>
                    <div>
                    <h3> {travel.destination} ({travel.days})</h3>
                    <p>{travel.description}</p>
                    <p> <strong>Price</strong> : {travel.totalCost} € </p>
                    </div>
                   <div> <span className={dealClass}>{dealName}</span>
                    {travel.allInclusive ? <span className='premium'>All-Inclusive</span>:<span></span> }
                    </div>
                   <button className='deleteBtn' onClick={() => {deleteTravelItem(travel.id)}}> Delete</button>
                </div>
            </div>
        })}
    </section>)
}

export default TravelList;