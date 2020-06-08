import React from "react";
import classes from "./Order.module.css";



export default ({ price, materials, details }) => {
  const materialsOutput = Object.keys(materials)
  .filter(material => materials[material].quantity > 0)
  .map(material => (
    <span key={material} className={classes.material}>
      {materials[material].label} ({materials[material].quantity})
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