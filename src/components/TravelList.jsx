import travelPlansData from '../assets/travel-plans.json';
import { useState } from 'react';
import '../components/TravelList.css';

function TravelList() {
  const [randomDesti, setRandomDesti] = useState(travelPlansData);
  // console.log(travelPlansData);

  // display picture, destination, days, totalCost, description
  const displayList = () => {
    // copy of the original array + shuffle elements. using -0.5 to shuffle better (+ and - numbers)
    const randomCountry = [...travelPlansData].sort(() => Math.random() - 0.5);
    setRandomDesti(randomCountry);
  };
  const clickBtn = () => {};

  return (
    <div className="travel-card">
      {randomDesti.map((eachDesti) => {
        return (
          // using a key when using map bc dynamic list
          <div className="card" key={eachDesti.id}>
            <div className="img">
              <img src={eachDesti.image} alt={eachDesti.destination}></img>
            </div>
            <div className="content">
              <h2>
                {eachDesti.destination} ({eachDesti.days} days)
              </h2>
              <p>{eachDesti.description}</p>
              <p>Price : {eachDesti.totalCost} €</p>
              <div className="labels">
                {eachDesti.totalCost <= 350 && (
                  <p className="great-label">Great Deal</p>
                )}
                {eachDesti.totalCost >= 1500 && (
                  <p className="label">Premium</p>
                )}
                {eachDesti.allInclusive && (
                  <p className="label">All inclusive</p>
                )}
              </div>
              <button onClick={clickBtn}></button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TravelList;
