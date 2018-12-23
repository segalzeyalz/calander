import React, { Component } from 'react';
import CSS from './SelectMonth.css';

class Option extends Component {    
  render() {
      let { MonthNum, MonthName} = this.props.date;
      let {chosenMonth} = this.props
    return (
        <option selected={MonthNum==chosenMonth} key={MonthNum} value={MonthNum}>{MonthName}</option>
        );
  }
}
export default Option;
