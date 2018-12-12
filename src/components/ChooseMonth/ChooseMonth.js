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
        <BtnMonth type="next"/>
        <SelectMonth dates={this.props.dates} onMount={this.props.onMount}/>
        <BtnMonth type="before"/>        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      dates: state.dates  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => dispatch({type: actionTypes.UPDATE_DATES})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonth);

