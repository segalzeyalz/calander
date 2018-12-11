import React, { Component } from 'react';
import CSS from './Days.css';

class Day extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={CSS.Day}>
        <span className={this.props.num>=this.props.startDay? CSS.DayNumOn:CSS.DayNumOff}>{this.props.num}</span>
      </div>
    );
  }
}

export default Day;
