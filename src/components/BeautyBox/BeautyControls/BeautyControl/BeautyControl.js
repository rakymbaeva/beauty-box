import React from "react";
import classes from "./BeautyControl.module.css";
import { useDispatch } from "react-redux";
import { ADD_MATERIAL, REMOVE_MATERIAL } from "../../../../store/actions";

export default ({ control, disabled }) =>{

  const dispatch = useDispatch();

  return (
    <div className={classes.BeautyControl}>
      <button
        className={classes.less}
        onClick={() =>
          dispatch({ type: REMOVE_MATERIAL, material: control.type })
        }
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() =>
          dispatch({ type: ADD_MATERIAL, material: control.type })
        }
      >
        +
      </button>
    </div>
  )
};
