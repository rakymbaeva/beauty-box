import React from "react";
import classes from "./Beauty.module.css";

export default ({ type }) => {
  const beautyClasses = [classes.Beauty, classes[type]];

  return <div className={beautyClasses.join(" ")}></div>;
};
