
import travelPlanList from "./components/travelPlanCard";

const travelPlanCard = () => {
  const [plans, setPlans] = useState(travelPlansData);

  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
  };

  return (
    <div>
      
      <ul>
        {plans.map((plan) => {
          let labels = [];

          if (plan.totalCost <= 350) labels.push("Great Deal");
          if (plan.totalCost >= 1500) labels.push("Premium");
          if (plan.allInclusive) labels.push("All Inclusive");

          return (
            <li key={plan.id}>
              {plan.destination}, {plan.country} – {plan.days} days, ${plan.totalCost}
              {labels.length > 0 && (
                <span style={{ marginLeft: "10px", color: "green" }}>
                  [{labels.join(" | ")}]
                </span>
              )}
              <button
                onClick={() => handleDelete(plan.id)}
                style={{ marginLeft: "10px", color: "red" }}>
                Delete
              </button>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default travelPlanCard;
