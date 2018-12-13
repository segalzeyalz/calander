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
        <BtnMonth type="next" onNext={this.props.onNext}/>
        <SelectMonth chosenMonth={this.props.chosenMonth} onSelect={this.props.onSelect} dates={this.props.dates} onMount={this.props.onMount}/>
        <BtnMonth type="before" onPrev={this.props.onPrev}/>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      dates: state.dates,
      chosenMonth:state.chosenMonth};
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch({type: actionTypes.UPDATE_DATES}),
    onSelect: (month) => dispatch({type: actionTypes.CHOOSE_MONTH, month:month}),
    onNext: () => dispatch({type: actionTypes.NEXT_MONTH}),
    onPrev: () => dispatch({type: actionTypes.PREV_MONTH})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonth);

