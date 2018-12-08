import React, { Component } from 'react';
import { Day } from './Day';
import CSS from './textComps.css';

class CalanderDays extends Component {

  render() {
    return (
      <div className={CSS.Title}>
       {this.props.type}
      </div>
    );
  }
}

export default CalanderDays;
