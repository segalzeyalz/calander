import React, { Component } from 'react';
import CSS from './Days.css'
import { connect } from 'react-redux';

import Day from '../components/Days/Days/Day';
import * as actionTypes from '../store/actions';

class Days extends Component {    
    render () {
        return (
            <div className={CSS.Container}>
                {this.props.days.map(day => (
                    <Day 
                        key={day}
                        num={day} 
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
        days: state.days,
        startDay:state.startDay
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectDay: (date) => dispatch({type: actionTypes.SELECT_DAY , date: date})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Days);