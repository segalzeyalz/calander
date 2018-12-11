import React, { Component } from 'react';
import CSS from './BtnMonth.css';

class BtnMonth extends Component {
    render() {
      const typeArrow = this.props.type==="next"? "‹":"›";
    return (
      <div className={CSS.Border}>
        {typeArrow}
      </div>
    );
  }
}

export default BtnMonth;
