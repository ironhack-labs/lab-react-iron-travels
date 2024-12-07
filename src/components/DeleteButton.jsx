import React from "react"

function DeleteButton({ onDelete }) {
  const deleteButtonStyle = {
    position: "absolute",
    bottom: "10px",
    backgroundColor: "white",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "30px",
    height: "40px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  };

  return (
    <button style={deleteButtonStyle} onClick={onDelete}>
      🗑️
    </button>
  );
}

export default DeleteButton;