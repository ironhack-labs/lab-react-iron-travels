import React from "react";
import "./Label.css";

const Label = ({ text, classType }) => {
  return <p className={`label ${classType}`}>{text}</p>;
};

export default Label;
