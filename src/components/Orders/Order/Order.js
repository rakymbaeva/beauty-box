import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
 
  pomadebarhat: "PomadeBarhat",
  pomadebrown: "pomadebrown",
  pomadedarkred: "pomadedarkred",
  pomadered: "pomadered",
  pomadeviolet: "pomadeviolet",
};

export default ({ price, materials, details }) => {
  const materialsOutput = Object.keys(materials).map((key) => (
    <span key={key} className={classes.material}>
      {CONTROLS[key]} ({materials[key]})
    </span>
  ));
  
  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + ", " + details.phone + ", " + details.address
        : "No details available"}
    </div>
  );

  return (
    <div className={classes.Order}>
       {detailsOutput}
      <div className={classes.price}>{price.toFixed(2)} som</div>
      <div className={classes.materials}>{materialsOutput}</div>
    </div>
  );
};