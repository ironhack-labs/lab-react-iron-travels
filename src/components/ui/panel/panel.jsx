function Panel( {children, className=""} ) {
    return (
        <div className={`border border-dark d-flex gap-4 p-4 box-border ${className}`}>
            {children}
        </div>
    )
}

export default Panel;