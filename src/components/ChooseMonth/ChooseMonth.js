import React, { Component } from 'react';
import CSS from './ChooseMonth.css';
import SelectMonth from './SelectMonth/SelectMonth'

class ChooseMonth extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <SelectMonth/>
      </div>
    );
  }
}

export default ChooseMonth;
