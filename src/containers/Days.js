import React, { Component } from 'react';
import CSS from './Days.css'
import { connect } from 'react-redux';
import moment from 'moment'
import Day from '../components/Days/Days/Day';
import * as actionTypes from '../store/actions';

class Days extends Component {    
    componentDidMount(){
        this.props.updateDays()
    }
    componentWillMount(){
        this.props.updateDays()
    }
    render () {
        let {chosenMonth, dates} = this.props;
        let monthIdx = dates.findIndex((elem)=>elem.id==chosenMonth)
        let daysArray = monthIdx>=0 && dates && dates[0] ? Array.from(new Array(dates[monthIdx].daysInMonth),(val,index)=>index+1):[]
        let firstDateMonth=monthIdx>=0 && dates && dates[0] ? (moment().year(dates[monthIdx].Year).month(dates[monthIdx].MonthNum-1).date(1).day()): ''
        let blankDaysArray =  Array.from(new Array(firstDateMonth),(val,index)=>index+1)
        return (
            <div className={CSS.Container}>
            {blankDaysArray.map((day,index) => (
                    <div className={CSS.BlankDay}/>
                ))}
                {daysArray.map((day,index) => (
                    <Day 
                        key={index}
                        num={index+1} 
                        date={dates[monthIdx]} 
                        startDay={this.props.startDay}
                        clicked={this.props.onSelectDay}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dates: state.dates,
        startDay:state.startDay,
        chosenMonth:state.chosenMonth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectDay: (date) => dispatch({type: actionTypes.SELECT_DAY , date: date}),
        updateDays: ()=>dispatch({type: actionTypes.UPDATE_DATES})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Days);