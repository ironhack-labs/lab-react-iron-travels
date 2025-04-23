


import travelList from "./components/travelList";

const travelList = () => {
  return (
    <div>
      
      <ul>
        {travelPlansData.map((plan) => (
          <li key={plan.id}>
            {plan.destination}, {plan.country} – {plan.days} days
          </li>
        ))}
      </ul>
    </div>
  );
};

export default travelList;
