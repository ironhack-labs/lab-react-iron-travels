import travelPlansData from '../assets/travel-plans.json';
import {useState} from 'react';
import TravelCard from './TravelCard';

function TravelList() {
  const [array, setItems] = useState(travelPlansData);

  const deleteItem = (arrayId) => {
    const filteredItems = array.filter((arr) => {
      return arr.id !== arrayId;
    });
    setItems(filteredItems);
  };

  return (
    <div className="items-container">
      {array.map((arr) => (
        <TravelCard
          key={arr.id}
          plan={arr}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}
export default TravelList;
