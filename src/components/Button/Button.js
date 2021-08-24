import React from "react";
import "../Button/Button.scss";
import "../../scss/App.scss";

const Button = ({ title }) => {
  return <button className="button ">{title}</button>;
};

export default Button;
