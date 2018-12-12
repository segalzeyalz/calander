import React, { Component } from 'react';
import CSS from './Days.css'
import { connect } from 'react-redux';

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
        console.log(this.props.dates)
        let {chosenMonth, dates} = this.props;
        let daysArray = dates &&dates[0] ? Array.from(new Array(this.props.dates[chosenMonth].daysInMonth),(val,index)=>index+1):[]
        return (
            <div className={CSS.Container}>
                {daysArray.map(day => (
                    <Day 
                        key={day.date}
                        num={day.date} 
                        date={day.date} 
                        startDay={this.props.startDay}
                        selected={day.selected} 
                        clicked={() => this.props.onSelectDay(day.date)}/>
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