import React, { Component } from 'react';
import CSS from './SelectMonth.css';

class SelectMonth extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <select className={CSS.Select}>
          <option value="January">Volvo</option>
          <option value="February">Saab</option>
          <option value="March">Mercedes</option>
          <option value="April">Audi</option>
          <option value="May">Audi</option>
          <option value="June">Audi</option>
          <option value="July">Audi</option>
          <option value="August">Audi</option>
          <option value="September">Audi</option>
          <option value="October">Audi</option>
          <option value="November">Audi</option>
          <option value="December">Audi</option>
          </select>
    );
  }
}

export default SelectMonth;
