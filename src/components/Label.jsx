function Label ({text, className}) {

    return (
        <h4 className={`label ${className}`}>
            {text}
        </h4>
    )
}

export default Label;