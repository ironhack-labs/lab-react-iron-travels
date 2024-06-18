import TravelCard from "./TravelCard";
import "./TravelList.css";
// let travelListTest = {
//   id: 1,
//   destination: "Paris, France",
//   image:
//     "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/paris.jpg",
//   days: 7,
//   allInclusive: true,
//   totalCost: 2200,
//   description: "Explore the romantic streets of P   aris.",
//   parts: [
//     {
//       name: "All-Inclusive Package",
//       description:
//         "Includes flights, hotel, meals, entertainment, tours and tickets to tourist attractions.",
//       cost: 2200,
//     },
//   ],
// };

function TravelList({ travels, handleRemove }) {
  console.log(travels);
  // const oneTravel = travels[2];
  return (
    <div>
      {travels.map((oneTravel) => {
        return (
          <TravelCard
            key={oneTravel.id}
            handleRemove={handleRemove}
            oneTravel={oneTravel}
          />
        );
      })}
    </div>
  );
}

export default TravelList;
