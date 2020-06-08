import React from "react";
import Beauty from "./Beauty/Beauty";
import classes from "./BeautyKit.module.css";

export default ({ price, materials }) => {
  let materialsOutput = [];

  Object.keys(materials).forEach((material) => {
    for (let i = 0; i < materials[material].quantity; i++) {
      materialsOutput.push(<Beauty key={material + i} type={material} />);
    }
  });

  return (
    <div className={classes.BeautyKit}>
      <div className={classes.imagebox}></div>
      <div className={classes.bento}>{materialsOutput}</div>
     
      <div className={classes.price}>Total price: {price.toFixed(2)} som</div>
    </div>
  );
};