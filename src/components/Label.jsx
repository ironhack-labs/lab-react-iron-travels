function Label({ label, color, textColor }) {
  const style = {
    backgroundColor: color || "orange",
    color: textColor || "white",
    padding: "3px 5px",
    borderRadius: "8px",
    fontWeight: "bold",
    marginRight: "7px",
  };
  return <div style={style}>{label}</div>;
}

export default Label;
