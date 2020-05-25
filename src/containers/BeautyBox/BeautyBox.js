import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BeautyKit from "../../components/BeautyBox/BeautyKit/BeautyKit";
import classes from "./BeautyBox.module.css";
import BeautyControls from "../../components/BeautyBox/BeautyControls/BeautyControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BeautyBox/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { useSelector } from "react-redux";


export default withErrorHandler( () => {
  const { materials, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(materials).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

  


  
/*
  useEffect(() => {
    axios
      .get("/materials.json")
      .then((response) => setMaterials(response.data))
      .catch((error) => {});
  }, []);
*/
  let output = <Spinner />;
  if (materials) {
    output = (
      <>
        <BeautyKit price={price} materials={materials} />
        <BeautyControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          materials={materials}
        />
      </>
    );
  }
 

  let orderSummary = <Spinner />;
  if (isOrdering ) {
    orderSummary = (
      <OrderSummary
        materials={materials}
        finishOrder={() => history.push("/checkout")}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BeautyBox}>
       
     {output}
      
     <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
      {orderSummary}
      </Modal>
    </div>
  );
}, axios);