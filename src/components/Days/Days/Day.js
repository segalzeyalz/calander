import React, { Component } from 'react';
import CSS from './Days.css';

class Day extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.num}
      </div>
    );
  }
}

export default Day;
