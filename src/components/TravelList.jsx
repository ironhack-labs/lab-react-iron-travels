import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";
function TravelList() {
  const [travels, setTravelsToDisplay] = useState(travelPlansData);
  
  const deleteTravel = (travelId) => {
    const newList = travels.filter((travelItem, i, arr) => {
      return travelItem.id !== travelId;
    });

    setTravelsToDisplay(newList);
  };
  return (
    <>
      {travels.map((travelObj, i, arr) => {
      let caja;
      let inclusive;
        if(travelObj.totalCost<=350){
          caja = <div className="Greatdeal"> Great Deal </div>;
        }
       else if(travelObj.totalCost >= 1500){
          caja = <div className="Premium"> Premium </div>;
        }
        else{
          caja =<></>;
        }
        if(travelObj.allInclusive){
          inclusive = <div className="AllInclusive">All-Inclusive</div>
        }
        else{
          inclusive = <></>
        }
        return (
          <div key={travelObj.id} className="travel">
            <div className="imagen">
              <img src={travelObj.image}></img>
            </div>
            <div className="texto">
              <h2>
                {travelObj.destination}, ({travelObj.days} Days)
              </h2>
              <p>{travelObj.description}</p>
              <p>Price: {travelObj.totalCost}€</p>
              {caja}
              {inclusive}

              <button onClick={() => deleteTravel(travelObj.id)} className="dltbutton"> Delete </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TravelList;
