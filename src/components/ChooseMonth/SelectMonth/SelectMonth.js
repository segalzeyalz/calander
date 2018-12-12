import React, { Component } from 'react';
import CSS from './SelectMonth.css';
import moment from 'moment';
import 'moment/locale/he' 
class SelectMonth extends Component {
  componentDidMount(){

  }
  render() {
      moment().locale("he")
      var deMarch = moment('2017-03')
      console.log(console.log(deMarch.format('MMMM')));
    return (
        <select className={CSS.Select}>
        </select>
    );
  }
}

export default SelectMonth;
