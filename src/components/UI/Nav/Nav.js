import React from 'react';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

export default () => {
  return(
    <ul className={classes.Nav}>
    <NavItem  url="/" active>Beauty-Box</NavItem>
    <NavItem  url="/orders">Orders</NavItem>
  </ul>
  )
};