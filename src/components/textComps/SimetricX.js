import React from 'react';
import CSS from './textComps.css';

const SimetricX = (props) => {
  return <font className={CSS.SimetricX} onClick={props.hideElement}>✖</font>
};
export default SimetricX;