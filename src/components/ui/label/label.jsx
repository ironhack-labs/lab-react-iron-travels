function Label({ type }) {
    const mode = (type === "Great Deal") ? "success" : "primary";
    return (
            <span className={`bg-${mode} p-2 text-black rounded`} style={{height: "35px"}}>
                {type} 
            </span>
    )
}

export default Label;