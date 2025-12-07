
import travelPlansData from '../assets/travel-plans.json';
import { useState } from 'react';
import Label from './label';

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function TravelList({ onAddItem }) {

    const [travelState, setTravel] = useState(travelPlansData);
    const [colorBackground, setColorBackground] = useState(0);

    function DeleteTravel(travelId) {
        const filteredTravel = travelState.filter(travel => travel.id !== travelId);
        setTravel(filteredTravel);
    };

    function addTravel(travel, travelId) {
        DeleteTravel(travelId);
        onAddItem(travel);
        if (colorBackground === (colors.length - 1)) {
            setColorBackground(0);
        } else {
            setColorBackground(colorBackground + 1);
        }
        
    }

    return (

        <>
        {travelState.map((travel) => {
            return (
                <div key={travel.id} className='d-flex border border-black border-2 rounded mb-4' style={{width: '1000px', margin: 'auto'}}>
                    <img className="pt-5 pb-5 ps-4 pe-4" src={travel.image} style={{width: '525px', height: '420px'}}/>
                    <div className='text-start pt-5 pb-5'>
                        <h5 style={{color: '#213548', fontSize: '30px'}}>{travel.destination} {'('}{travel.days} Days{')'}</h5>
                        <p style={{color: '#394a5a', fontSize: '24px'}}>{travel.description}</p>
                        <p style={{color: '#52616f', fontSize: '25px'}}><strong>Price:</strong> {travel.totalCost} €</p>
                        <div className='d-flex gap-2'>
                            {travel.totalCost <= 350 && <Label text='Great Deal' width='fit-content' height='30px' backgroundColor='#77bc77' fontColor='#10200f' click={() => {}}></Label>}
                            {travel.totalCost >= 1500 && <Label text='Premium' width='fit-content' height='30px' backgroundColor='#366bca' fontColor='#f6f9fd'  click={() => {}}></Label>}
                            {travel.allInclusive && <Label text='All-inclusive' width='fit-content' height='30px' backgroundColor='#366bca' fontColor='#f6f9fd'  click={() => {}}></Label>}
                        </div>
                        <div className='d-flex align-items-end justify-content-between' style={{height: '135px'}}>
                            <Label text='Delete'width='75px' height='45px' backgroundColor='#aba9ab' fontColor='#10200f' click={() => DeleteTravel(travel.id)}></Label>
                            <Label text='♡' width='50px' height='45px' backgroundColor= {colors[colorBackground]} fontColor='#10200f' click={() => addTravel(travel, travel.id)}></Label>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    );
}

export default TravelList;