export default function Tag({totalCost, allInclusive}){
    console.log(typeof totalCost, totalCost);
    return (
        // <button>Premium</button>
        <div className = "tag-container">
            {totalCost <= 350 && <button className="tag-deal"> Great deal </button>}
            {totalCost >= 1500 && <button className ="tag-premium"> Premium </button>}
            {allInclusive == true && <button className="tag-inclusive"> All inclusive </button>}
        </div>
    )
}