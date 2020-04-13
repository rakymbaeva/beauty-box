import React from "react";
import classes from "./BeautyControls.module.css";
import BeautyControl from "./BeautyControl/BeautyControl";

const CONTROLS = [
  { label: "Pomade-barhat", type: "pomadebarhat" },
  { label: "Pomade-brown", type: "pomadebrown" },
  { label: "Pomade-darkred", type: "pomadedarkred" },
  { label: "Pomade-red", type: "pomadered" },
  { label: "Pomade-violet", type: "pomadeviolet" },
  
];

export default ({ ingredients, addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BeautyControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return <div className={classes.BeautyControls}>{controlsOutput}</div>;
};
