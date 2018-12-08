import React, { Component } from 'react';
import CSS from './textComps.css';

class CalanderTitle extends Component {
  constructor(props){
    super(props);
      this.state = {
    }
  }
  componentWillUpdate(){
      return false
  }

  render() {
    return (
      <div>
        {this.props.type==="exit"? "exit":""}
      </div>
    );
  }
}

export default CalanderTitle;
