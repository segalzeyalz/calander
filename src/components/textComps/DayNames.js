import React from 'react';
import CSS from './textComps.css';

const DayNames = (props) => {
  return <div className={CSS.DayNames}>
    <font>א'</font>
    <font>ב'</font>
    <font>ג'</font>
    <font>ד'</font>
    <font>ה'</font>
    <font>ו'</font>
    <font>ש'</font>
  </div>
};
export default DayNames;