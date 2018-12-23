import React, { Component } from 'react';
import * as actionTypes from './store/actions';
import SimetricX from './components/textComps/SimetricX'
import CalenderTitle from './components/textComps/CalenderTitle'
import ChooseMonth from './components/ChooseMonth/ChooseMonth'
import calenderTypes from './logics/calenderTypes.json'
import DayNames from './components/textComps/DayNames';
import Days from './containers/Days'
import Detailes from './components/Detailes/Detailes'
import CSS from './App.css';
import { connect } from 'react-redux';

class DatePicker extends Component {
  render() {
    return (
      <div className={this.props.isOpen? CSS.card: CSS.hide}>
        <SimetricX onClose={this.props.onClose}/>
        <CalenderTitle type={calenderTypes.Exit}/>
        <ChooseMonth/>
        <DayNames />
        <Days />
        <Detailes/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isOpen: state.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: (date) => dispatch({type: actionTypes.CLOSE_CALANDER})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);