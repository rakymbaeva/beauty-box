import React from "react";
import classes from "./BeautyControl.module.css";

export default ({ control, removeMaterial, addMaterial, disabled }) => (
  <div className={classes.BeautyControl}>
     <span className={classes.label}>{control.label}</span>
    <button
      className={classes.less}
      onClick={() =>removeMaterial(control.type)}
      disabled={disabled}
    >
      -
    </button>
   
    <button
      className={classes.more}
      onClick={() => addMaterial(control.type)}
    >
      +
    </button>
  </div>
);
