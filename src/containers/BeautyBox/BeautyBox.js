import React, { useState } from "react";
import BeautyKit from "../../components/BeautyBox/BeautyKit/BeautyKit";
import classes from "./BeautyBox.module.css";
import BeautyControls from "../../components/BeautyBox/BeautyControls/BeautyControls";

const PRICES = {
  pomadebarhat: 300,
  pomadebrown: 300,
  pomadedarkred: 300,
  pomadered: 300,
  pomadeviolet: 300,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    pomadebarhat: 0,
  pomadebrown: 0,
  pomadedarkred: 0,
  pomadered: 0,
  pomadeviolet: 0,
  });
  const [price, setPrice] = useState(100);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.BeautyBox}>
      <BeautyKit price={price} ingredients={ingredients} />
      <BeautyControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};