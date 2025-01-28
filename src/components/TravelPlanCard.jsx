const TravelPlanCard = ({ plan, onDelete, onFavorite }) => {
    const [bgColor, setBgColor] = useState("purple");
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
    const changeColor = () => {
      const currentIndex = colors.indexOf(bgColor);
      setBgColor(colors[(currentIndex + 1) % colors.length]);
    };
  
    return (
      <li>
        <div>
          {plan.destination} - ${plan.totalCost}
        </div>
        <div>
          {plan.totalCost <= 350 && <span>Great Deal</span>}
          {plan.totalCost >= 1500 && <span>Premium</span>}
          {plan.allInclusive && <span>All Inclusive</span>}
        </div>
        <button onClick={() => onDelete(plan.id)}>Delete</button>
        <button
          onClick={() => {
            onFavorite(plan);
            changeColor();
          }}
          style={{ backgroundColor: bgColor }}
        >
          ♡
        </button>
      </li>
    );
  };
  
  export default TravelPlanCard;
  
  