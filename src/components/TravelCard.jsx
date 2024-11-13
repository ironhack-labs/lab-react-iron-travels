import './travelCard.css'
import Label from './label';

function TravelCard({travel, onDelete}) {
    return (  
        <div className="TravelCard">
            <img src={travel.image} alt="Destination Image" />
            <div className='travelInfo'>
                <h2>{travel.destination} ({travel.days} days)</h2>
                <i>{travel.description}</i>
                <span><b>Price: </b> {travel.totalCost}€</span>
                <div className='labels'>
                    { travel.totalCost > 2000 && <Label text={"Premium"}/>}
                    { travel.totalCost < 350 && <Label text={"Great Deal"}/>}
                    { travel.allInclusive && <Label text={"All Inclusive"}/>}
                </div>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default TravelCard;