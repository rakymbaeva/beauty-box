import React from 'react';
import logo from '../../../assets/logo.jpg';
import classes from './Logo.module.css';

export default () => (
  <div className={classes.Logo}>
    <img src={logo} alt="Beauty Box logo"  />
    <span>Beauty-Box</span>
  </div>
);