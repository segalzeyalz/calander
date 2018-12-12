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
            <option key={date.Month} value={date.Month}>{date.Month}</option>
        ))}
        </select>
    );
  }
}

export default SelectMonth;
