import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BeautyKit from "../../components/BeautyBox/BeautyKit/BeautyKit";
import classes from "./BeautyBox.module.css";
import BeautyControls from "../../components/BeautyBox/BeautyControls/BeautyControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BeautyBox/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withAxios from "../../hoc/withAxios/withAxios";
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";


export default withAxios( () => {
  const { materials, price } = useSelector(state => state.builder);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();


  


  

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);


  let output = <Spinner />;
  if (materials) {
    const canOrder = Object.values(materials).reduce((canOrder, material) => {
      return !canOrder ? material.quantity > 0 : canOrder;
    }, false);

    output = (
      <>
        <BeautyKit price={price} materials={materials} />
        <BeautyControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          materials={materials}
        />
          <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            materials={materials}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
            />
        </Modal>
      </>
    );
  }
 

 

  return (
    <div className={classes.BeautyBox}>
       
     {output}
      
    
    </div>
  );
}, axios);