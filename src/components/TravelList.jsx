import TravelPlanCard from "./TravelPlanCard";

const TravelList = ({ list, deleteFunc, favoriteFunc}) => {

    return (
        <ul className="travel-list">
            {list.map(item => (
                <TravelPlanCard 
                    plan={item} 
                    key={item.id} 
                    deleteFunc={deleteFunc} 
                    favoriteFunc={favoriteFunc}
                />
            ))}
        </ul>
    );
}

export default TravelList;