import React from "react";
import classes from "./BeautyControl.module.css";
import { useDispatch } from "react-redux";
import { remove, add } from "../../../../store/actions/builder"

export default ({ label, material, disabled }) =>{

  const dispatch = useDispatch();

  return (
    <div className={classes.BeautyControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, material)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button
        className={classes.more}
        onClick={() => add(dispatch, material)}
      >
        +
      </button>
    </div>
  )
};
