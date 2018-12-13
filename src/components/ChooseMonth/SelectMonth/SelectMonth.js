import React, { Component } from 'react';
import CSS from './SelectMonth.css';
import ChooseMonth from '../ChooseMonth';
class SelectMonth extends Component {
  componentDidMount(){
    this.props.onMount()
  }
  render() {
    return (
        <select className={CSS.Select} onSelect={() =>this.props.onSelect()}>
        {this.props.dates.map(date => (
            <option selected={date.MonthNum==this.props.chosenMonth} key={date.MonthNum} value={date.MonthName}>{date.MonthName}</option>
        ))}
        </select>
    );
  }
}

export default SelectMonth;
