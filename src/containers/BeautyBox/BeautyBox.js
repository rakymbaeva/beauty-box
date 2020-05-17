import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import BeautyKit from "../../components/BeautyBox/BeautyKit/BeautyKit";
import classes from "./BeautyBox.module.css";
import BeautyControls from "../../components/BeautyBox/BeautyControls/BeautyControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BeautyBox/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const PRICES = {
  pomadebarhat: 200.1,
  pomadebrown: 200.2,
  pomadedarkred: 200.3,
  pomadered: 200,
  pomadeviolet: 200,
};

export default withErrorHandler( () => {
  const [materials, setMaterials] = useState(null);
  const [price, setPrice] = useState(50);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  function checkCanOrder(materials) {
    const total = Object.keys(materials).reduce((total, material) => {
      return total + materials[material];
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
    const queryParams = Object.keys(materials).map(
      (material) =>
        encodeURIComponent(material) +
        "=" +
        encodeURIComponent(materials[material])
    );
    queryParams.push("price=" + encodeURIComponent(price.toFixed(2)));

    history.push({
      pathname: "/checkout",
      search: queryParams.join("&"),
    });
  }


  function addMaterial(type) {
    const newMaterials = { ...materials };
    newMaterials[type]++;
    setMaterials(newMaterials);
    checkCanOrder(newMaterials);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeMaterial(type) {
    if (materials[type] >= 1) {
      const newMaterials = { ...materials };
      newMaterials[type]--;
      setMaterials(newMaterials);
      checkCanOrder(newMaterials);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  useEffect(() => {
    axios
      .get("/materials.json")
      .then((response) => setMaterials(response.data))
      .catch((error) => {});
  }, []);

  let output = <Spinner />;
  if (materials) {
    output = (
      <>
        <BeautyKit price={price} materials={materials} />
        <BeautyControls
          startOrder={startOrder}
          canOrder={canOrder}
          materials={materials}
          addMaterial={addMaterial}
          removeMaterial={removeMaterial}
        />
      </>
    );
  }
 

  let orderSummary = <Spinner />;
  if (isOrdering ) {
    orderSummary = (
      <OrderSummary
        materials={materials}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BeautyBox}>
     {output}
      
      <Modal  show={isOrdering}  hideCallback={cancelOrder}>
      {orderSummary}
      </Modal>
    </div>
  );
}, axios);