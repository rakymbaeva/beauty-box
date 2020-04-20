import React from "react";
import Beauty from "./Beauty/Beauty";
import classes from "./BeautyKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Beauty key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.BeautyKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      
      <div className={classes.price}>Total price: {price.toFixed(2)} som</div>
    </div>
  );
};