import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
  pomadebarhat: "pomadebarhat",
  pomadebrown: "pomadebrown",
  pomadedarkred: "pomadedarkred",
  pomadered: "pomadered",
  pomadeviolet: "pomadeviolet",
};

export default ({ materials, cancelOrder, finishOrder, price }) => {
  const materialsOutput = Object.keys(materials)
    .filter((material) => materials[material] > 0)
    .map((material) => (
      <li  key={material}>
        {LABELS[material]}: {materials[material]}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations! You've built a best sushi-kit of all times!</p>
      <ul>{materialsOutput}</ul>
      <p>Total price: {price.toFixed(2)} som</p>
      <p>Would you like to checkout?</p>
     
      <Button click={finishOrder} green>Checkout</Button>
      <Button click={cancelOrder} red>Cancel</Button>
    </div>
  );
};