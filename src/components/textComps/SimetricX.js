import React from 'react';
import CSS from './textComps.css';

const SimetricX = (props) => {
  return <font className={CSS.SimetricX} onClick={props.onClose}>✖</font>
};
export default SimetricX;