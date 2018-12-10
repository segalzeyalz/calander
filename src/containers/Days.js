import React, { Component } from 'react';
import { connect } from 'react-redux';

import Day from '../components/Days/Days/Day';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    
    render () {
        return (
            <div>
                {this.props.dys.map(day => (
                    <Day 
                        key={day.name}
                        num={day.num} 
                        date={day.date} 
                        selected={day.selected} 
                        clicked={() => this.props.onSelectDay(day.date)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        days: state.days
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectDay: (date) => dispatch({type: actionTypes.SELECT_DAY , date: date})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Days);