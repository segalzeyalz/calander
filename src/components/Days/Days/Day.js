import React, { Component } from 'react';
import CSS from './Days.css';
import moment from 'moment'
import 'moment/locale/he';

class Day extends Component {
  render() {
    let {isThisMonth, num, startDay} = this.props;
    let enableOrDisable = (!isThisMonth || num>=startDay);
    let month = this.props.date.EngMonth.substring(0,2)
    let year = this.props.date.EngMonth.substring(3,7)
    let date = moment().year(year).month(month-1).date(num).format("DD MMM YYYY");
    return (
      <div className={CSS.Day} align="center">
        <span onClick={()=>{console.log(date)}} className={enableOrDisable? CSS.DayNumOn:CSS.DayNumOff}>{this.props.num}</span>
      </div>
    );
  }
}

export default Day;
