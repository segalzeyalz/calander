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
        let isThisMonth = chosenMonth==(moment().locale("he").format("M"))
        return (
            <div className={CSS.Container}>
                {daysArray.map((day,index) => (
                    <Day 
                        key={day.date}
                        num={index+1} 
                        date={dates[monthIdx]} 
                        isThisMonth={isThisMonth}
                        startDay={this.props.startDay}
                        selected={day.selected} 
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