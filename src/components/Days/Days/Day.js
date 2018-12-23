import React, { Component } from 'react';
import CSS from './Days.css';
import moment from 'moment'
import 'moment/locale/he';

class Day extends Component {
  render() {
    let {num, startDay} = this.props;
    let {MonthNum, Year} = this.props.date
    let date=moment().year(Year).month(MonthNum-1).date(num)
    console.log(num===1 && dayNum==6)
    let dateStartDay=moment().year(startDay.year).month(startDay.month).date(startDay.day)
    let enableOrDisable = (date.isAfter(dateStartDay));
    let dayNum = date.day()
    let blankDays = Array.from(new Array(dayNum),(val,index)=>index+1)

    if(num!==1){
    return (
      <div className={[CSS.Day, this.props.CharterDay? CSS.CharterDay:'none'].join(' ')} align="center">
        <span onClick={()=>{enableOrDisable && console.log(date.format("DD/MM/YYYY"))}} className={enableOrDisable? CSS.DayNumOn:CSS.DayNumOff}>{this.props.num}</span>
      </div>
    );}else{ return (
      <div className={CSS.BlankDay} align="center">
        {blankDays.map((day,index) => (
          <div></div>
        ))}
        </div>
      )
    }
  }
}

export default Day;
