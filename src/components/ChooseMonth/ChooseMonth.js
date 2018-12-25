import React, { Component } from 'react';
import CSS from './ChooseMonth.css';
import { connect } from 'react-redux';
import * as actionTypes from './../../store/actions';
import BtnMonth from './BtnMonth/BtnMonth'
import SelectMonth from './SelectMonth/SelectMonth'

class ChooseMonth extends Component {
  render() {
    return (
      <div className={CSS.Container}>
        <BtnMonth isStartMonth={this.props.isStartMonth} isLastMonth={this.props.isLastMonth} type="next" onNext={this.props.onNext}/>
        <SelectMonth onSelect={this.props.onSelect} chosenMonth={this.props.chosenMonth} dates={this.props.dates} onMount={this.props.onMount}/>
        <BtnMonth isStartMonth={this.props.isStartMonth} isLastMonth={this.props.isLastMonth} type="before" onPrev={this.props.onPrev}/>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      dates: state.dates,
      chosenMonth:state.chosenMonth,
      firstMonth:state.startDay.month,
      isStartMonth:state.isStartMonth,
      isLastMonth:state.isLastMonth
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch({type: actionTypes.UPDATE_DATES}),
    onSelect: (event) => dispatch({type: actionTypes.CHOOSE_MONTH, month: event}),
    onNext: () => dispatch({type: actionTypes.NEXT_MONTH}),
    onPrev: () => dispatch({type: actionTypes.PREV_MONTH})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonth);

