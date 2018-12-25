import React, { Component } from 'react';
import CSS from './BtnMonth.css';

class BtnMonth extends Component {
    render() {
      let {type, isStartMonth ,isLastMonth} = this.props;
      const typeArrow = type==="next"? "‹":"›";
      let couldClick = !((type ==="next" && isLastMonth) || (type==="before" && isStartMonth))
      console.log(couldClick)
    return (
      <div onClick={this.props.onPrev || this.props.onNext} className={[CSS.Border, !couldClick? CSS.Disable:'none'].join(' ')}>
        <span className={CSS.Span}>{typeArrow}</span>
      </div>
    );
  }
}

export default BtnMonth;
