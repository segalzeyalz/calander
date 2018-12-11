import React, { Component } from 'react';
import CSS from './ChooseMonth.css';
import BtnMonth from './BtnMonth/BtnMonth'
import SelectMonth from './SelectMonth/SelectMonth'

class ChooseMonth extends Component {
  render() {
    return (
      <div className={CSS.Container}>
        <BtnMonth type="next"/>
        <SelectMonth/>
        <BtnMonth type="before"/>        
      </div>
    );
  }
}

export default ChooseMonth;
