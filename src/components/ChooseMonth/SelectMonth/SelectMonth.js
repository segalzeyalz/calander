import React, { Component } from 'react';
import CSS from './SelectMonth.css';
class SelectMonth extends Component {
  componentDidMount(){
    this.props.onMount()
  }
  render() {
    return (
        <select className={CSS.Select} onSelect={() =>this.props.onSelect()}>
        {this.props.dates.map(date => (
            <option key={date.MonthName} value={date.MonthName}>{date.MonthName}</option>
        ))}
        </select>
    );
  }
}

export default SelectMonth;
