import React from "react";
import BeautyKit from "../../BeautyBox/BeautyKit/BeautyKit";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";


export default ({price, materials, checkoutCancel, checkoutContinue}) =>{
    return (
      <div className={classes.CheckoutSummary}>
        <BeautyKit price={price} materials={materials} />
        <Button click={checkoutCancel} red>
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
      </div>
    );
  };