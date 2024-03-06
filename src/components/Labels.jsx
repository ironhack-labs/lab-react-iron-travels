export const Labels = ({ travelCost, allInclusive }) => {
  return (
    <div id="labels">
      {travelCost <= 350 && <div className="great-deal-label">Great Deal</div>}
      {travelCost >= 1500 && <div className="premium-label">Premium</div>}
      {allInclusive ? (
        <div className="all-inclusive-label">All-inclusive {allInclusive}</div>
      ) : null}
    </div>
  );
};
