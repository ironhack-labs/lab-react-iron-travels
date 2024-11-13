import TravelCard from "./TravelCard";
import './travelList.css'

function TravelList({travels, deleteCallback}) {
    

    return (  
        <div className="travelList">
            {travels.map(travel => <TravelCard travel={travel} key={travel.id}
            onDelete={() => deleteCallback(travel.id)}/>)}
        </div>
    );
}

export default TravelList;