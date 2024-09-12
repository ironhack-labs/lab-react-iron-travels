export const costCondition = (price) => {
    if (price < 350) {
        return <span className="green">Great Deal</span>;
    } else if (price > 1500){
        return <span className="blue">Premium</span>;
    } else {
        return null;
    }
}

export const inclusiveCondition = (condition) => {
    return condition ? <span className="blue">All Inclusive</span> : null;
}
