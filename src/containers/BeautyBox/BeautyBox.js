import React, { useState } from "react";
import BeautyKit from "../../components/BeautyBox/BeautyKit/BeautyKit";
import classes from "./BeautyBox.module.css";
import BeautyControls from "../../components/BeautyBox/BeautyControls/BeautyControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BeautyBox/OrderSummary/OrderSummary";

const PRICES = {
  pomadebarhat: 200.1,
  pomadebrown: 200.2,
  pomadedarkred: 200.3,
  pomadered: 200,
  pomadeviolet: 200,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    pomadebarhat: 0,
  pomadebrown: 0,
  pomadedarkred: 0,
  pomadered: 0,
  pomadeviolet: 0,
  });
  const [price, setPrice] = useState(50);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    alert("You are on the checkout page!");
  }



  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.BeautyBox}>
      <BeautyKit price={price} ingredients={ingredients} />
      <BeautyControls
       startOrder={startOrder}
       canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      <Modal  show={isOrdering}  hideCallback={cancelOrder}>
        <OrderSummary ingredients={ingredients}  finishOrder={finishOrder}
          cancelOrder={cancelOrder}  price={price}/>
      </Modal>
    </div>
  );
};