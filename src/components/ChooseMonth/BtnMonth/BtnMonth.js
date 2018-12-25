import React, { Component } from 'react';
import CSS from './BtnMonth.css';

class BtnMonth extends Component {
    render() {
      const typeArrow = this.props.type==="next"? "‹":"›";
    return (
      <div onClick={this.props.onPrev || this.props.onNext} className={CSS.Border}>
        <span className={CSS}>{typeArrow}</span>
      </div>
    );
  }
}

export default BtnMonth;
