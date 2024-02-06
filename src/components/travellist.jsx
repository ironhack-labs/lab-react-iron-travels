import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";


function TravelPlan() {
  const [destinationsToDisplay, setDestinationsToDisplay] =
    useState(travelPlansData);

  let title = "";
  if (destinationsToDisplay.length > 0) {
    title = <h2>Number of destinations: {destinationsToDisplay.length}</h2>;
  } else {
    title = <h2>Sorry, there are no destinations currently</h2>;
  }

  const deleteDestination = (destinationId) => {
    const newList = destinationsToDisplay.filter((destinationObj) => {
      return destinationObj.id !== destinationId;
    });
    setDestinationsToDisplay(newList);
  };

  return (
    <section className="Destination-list">
      {title}

      {destinationsToDisplay.map((destinationInfo) => {
        return (
          <div key={destinationInfo.id} className="destination card">
            <div className="image-container">
              {destinationInfo.image ? (
                <img src={destinationInfo.image} alt={destinationInfo.destination} />
              ) : (
                <img src="https://dummyimage.com/182x268/ffffff/000000" alt="Placeholder" />
              )}
            </div>
            <div className="info-container">
              <h2>
                {destinationInfo.destination}&nbsp;({destinationInfo.days}days)
              </h2>
              <p>{destinationInfo.description}</p>
              <p>Price: {destinationInfo.totalCost}$</p>
              {destinationInfo.totalCost > 1499 && <p className="premium-label">Premium</p>}
              {destinationInfo.totalCost < 351 && <p className="great-deal-label">Great Deal</p>}

              <button onClick={() => deleteDestination(destinationInfo.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TravelPlan;



// import travelPlansData from "../assets/travel-plans.json";
// import { useState } from "react";

// function TravelPlan() {
//   const [destinationsToDisplay, setDestinationsToDisplay] =
//     useState(travelPlansData);

//   let title = "";
//   if (destinationsToDisplay.length > 0) {
//     title = <h2>Number of destinations: {destinationsToDisplay.length}</h2>;
//   } else {
//     title = <h2>Sorry, there are no destinations currently</h2>;
//   }

//   const deleteDestination = (destinationId) => {
//     const newList = destinationsToDisplay.filter((destinationObj) => {
//       return destinationObj.id !== destinationId;
//     });
//     setDestinationsToDisplay(newList);
//   };

//   return (
//     <section className="Destination-list">
//       {title}

//       {destinationsToDisplay.map((destinationInfo) => {
//         return (
//           <div key={destinationInfo.id} className="destination card">
//             <h2>
//               {destinationInfo.destination}&nbsp;({destinationInfo.days}days)
//             </h2>
//             <p>{destinationInfo.description}</p>
//             <p>Price: {destinationInfo.totalCost}$</p>

//             {destinationInfo.image ? (
//               <img src={destinationInfo.image} />
//             ) : (
//               <img src="https://dummyimage.com/182x268/ffffff/000000" />
//             )}

//             {destinationInfo.totalCost > 1499 && <p>Premium</p>}
//             {destinationInfo.totalCost < 351 && <p>Great Deal</p>}
//             <button
//               onClick={() => {
//                 deleteDestination(destinationInfo.id);
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

// export default TravelPlan;

// import travelPlansData from "../assets/travel-plans.json";

// function TravelPlan() {
//   let tripInfo = travelPlansData.map((trip) => {
//     return (
//       <section className="travelsContainer" key={trip.destination}>
//         <h1>
//           {trip.destination} ({trip.days} Days)
//         </h1>
//         <img src={trip.image} alt={trip.destination} className="imgs"></img>
//         <p>{trip.description}</p>
//         <p>{trip.totalCost}€</p>
//       </section>
//     );
//   });

//   return <div>{tripInfo}</div>;
// }

// export default TravelPlan;
