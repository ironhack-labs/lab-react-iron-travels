const Label = (props) => {
  const { children, isGreen } = props;
  const style = {
    color: isGreen ? "black" : "white",
    background: isGreen ? "#77BC76" : "#366AC9",
  };
  return (
    <div className="label" style={style}>
      {children}
    </div>
  );
};

export default Label;
