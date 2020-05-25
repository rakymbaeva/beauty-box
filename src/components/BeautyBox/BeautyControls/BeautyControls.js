import React from "react";
import classes from "./BeautyControls.module.css";
import BeautyControl from "./BeautyControl/BeautyControl";
import Button from "../../UI/Button/Button";


const CONTROLS = [
  { label: "Pomade-barhat", type: "pomadebarhat" },
  { label: "Pomade-brown", type: "pomadebrown" },
  { label: "Pomade-darkred", type: "pomadedarkred" },
  { label: "Pomade-red", type: "pomadered" },
  { label: "Pomade-violet", type: "pomadeviolet" },
  
];

export default ({ canOrder, materials, startOrder}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BeautyControl
      key={control.type}
      control={control}
      disabled={materials[control.type] === 0}
    />
  ));

  return (
    <div className={classes.BeautyControls} >
     
   
       {controlsOutput}
     
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};