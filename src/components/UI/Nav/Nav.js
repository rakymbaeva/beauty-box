import React from 'react';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

export default () => {
  return(
    <ul className={classes.Nav}>
    <NavItem  url="/Builder" active>Beauty-Box</NavItem>
    <NavItem  url="/checkout">Checkout</NavItem>
  </ul>
  )
};