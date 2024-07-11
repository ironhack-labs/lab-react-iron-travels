const PlanCardPart = ({ name, description, cost }) => {
  return (
    <div className="part__card">
      <div className="part__title">
        <h4 className="part__title-header">{name}</h4>
        <p className="part__title-cost">{cost} €</p>
      </div>

      <p className="part__description">{description}</p>
    </div>
  );
};

export default PlanCardPart;
