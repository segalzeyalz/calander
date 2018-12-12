import React, { Component } from 'react';
import CSS from './Days.css';

class Day extends Component {
  render() {
    return (
      <div className={CSS.Day} align="center">
        <span className={this.props.num>=this.props.startDay? CSS.DayNumOn:CSS.DayNumOff}>{this.props.num}</span>
      </div>
    );
  }
}

export default Day;
