import React, { Component } from 'react';
import CSS from './SelectMonth.css';
class SelectMonth extends Component {
  componentDidMount(){
    this.props.onSelect()
  }
  render() {
    return (
        <select className={CSS.Select}>
        {this.props.dates.map(date => (
            <option value={date.Month}>{date.Month}</option>
        ))}
        </select>
    );
  }
}

export default SelectMonth;
