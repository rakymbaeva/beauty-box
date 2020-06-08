import React from "react";
import classes from "./BeautyControls.module.css";
import BeautyControl from "./BeautyControl/BeautyControl";
import Button from "../../UI/Button/Button";




export default ({ canOrder, materials, startOrder}) => {
  const controlsOutput = Object.keys(materials).map((material) => (
    <BeautyControl
    key={material}
    material={material}
    label={materials[material].label}
    disabled={materials[material].quantity === 0}
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