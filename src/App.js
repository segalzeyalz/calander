import React, { Component } from 'react';
import Moment from 'react-moment';
import SimetricX from './components/textComps/SimetricX'
import CalenderTitle from './components/textComps/CalenderTitle'
import ChooseMonth from './components/ChooseMonth/ChooseMonth'
import calenderTypes from './logics/calenderTypes.json'
import CSS from './App.css';

class datepicker extends Component {
  constructor(props){
    super(props);
      this.state = {
        showCalander:true
    }
    this.hideCalander = this.hideCalander.bind(this)
  }
  hideCalander(){
    this.setState({showCalander:false})
  }
  render() {
    return (
      <div className={this.state.showCalander? CSS.card:CSS.hide}>
        <SimetricX hideElement={this.hideCalander}/>
        <CalenderTitle type={calenderTypes.Exit}/>
        <ChooseMonth/>
        <Moment format="DD/MM/YYYY" date={"1976-04-19T12:59-0500"} />
      </div>
    );
  }
}

export default datepicker;
