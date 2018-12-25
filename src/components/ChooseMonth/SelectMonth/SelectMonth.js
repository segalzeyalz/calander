import React, { Component } from 'react';
import CSS from './SelectMonth.css';
import ChooseMonth from '../ChooseMonth';
class SelectMonth extends Component {
  componentDidMount(){
    this.props.onMount()
  }
  render() {
    return (
          <select onChange={(event)=>this.props.onSelect(parseInt(event.target.value))} className={CSS.Select}>
            {this.props.dates.map(date => (
                <option selected={date.MonthNum==this.props.chosenMonth} key={date.MonthNum} value={date.MonthNum}>{date.MonthName}</option>
            ))}
          </select>
    );
  }
}

export default SelectMonth;
