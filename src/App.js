import React, { Component } from 'react';
import Moment from 'react-moment';
import SimetricX from './components/textComps/SimetricX'
import CalenderTitle from './components/textComps/CalenderTitle'
import ChooseMonth from './components/ChooseMonth/ChooseMonth'
import calenderTypes from './logics/calenderTypes.json'
import CSS from './App.css';

class datepicker extends Component {
  
  render() {
    return (
      <div className={CSS.card}>
        <SimetricX/>
        <CalenderTitle type={calenderTypes.Exit}/>
        <ChooseMonth/>
      </div>
    );
  }
}

export default datepicker;
