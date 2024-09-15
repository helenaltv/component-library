import React from "react";
import MyButton from "/src/components/Button.jsx";
import "../assets/styles/Button.module.css";

const ButtonPage = () => (
  <div className="button-page">
    <h1>Buttons</h1>
    <MyButton size="large" color="red" disabled={false}>
      Large Red Button
    </MyButton>
    <MyButton size="small" color="blue" disabled={true}>
      Small Blue Button
    </MyButton>
  </div>
);

export default ButtonPage;
