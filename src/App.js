import React, { Component } from 'react';
import * as actionTypes from './store/actions';
import Moment from 'react-moment';
import SimetricX from './components/textComps/SimetricX'
import CalenderTitle from './components/textComps/CalenderTitle'
import ChooseMonth from './components/ChooseMonth/ChooseMonth'
import calenderTypes from './logics/calenderTypes.json'
import Days from './containers/Days'
import CSS from './App.css';
import { connect } from 'react-redux';

class DatePicker extends Component {
  render() {
    return (
      <div className={this.props.isOpen? CSS.card: CSS.hide}>
        <SimetricX onClose={this.props.onClose}/>
        <CalenderTitle type={calenderTypes.Exit}/>
        <ChooseMonth/>
        <Days />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      days: state.days,
      isOpen: state.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectDay: (date) => dispatch({type: actionTypes.SELECT_DAY , date: date}),
    onClose: (date) => dispatch({type: actionTypes.CLOSE_CALANDER})
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);