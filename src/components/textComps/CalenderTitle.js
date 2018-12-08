import React, { Component } from 'react';
import CSS from './textComps.css';

class CalanderTitle extends Component {
  componentWillUpdate(){
      return false;
  }

  render() {
    return (
      <div className={CSS.Title}>
       {this.props.type}
      </div>
    );
  }
}

export default CalanderTitle;
