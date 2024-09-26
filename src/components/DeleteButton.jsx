import React from "react";

function DeleteButton({ onDelete }) {
  return (
    <button onClick={onDelete} className="delete-button">
      Delete
    </button>
  );
}

export default DeleteButton;
