import React, { Component } from 'react';
import CSS from './SelectMonth.css';

class SelectMonth extends Component {
  render() {
    return (
        <select className={CSS.Select}>
            <option value="January">ינואר</option>
            <option value="February">פברואר</option>
            <option value="March">מרץ</option>
            <option value="April">אפריל</option>
            <option value="May">מאי</option>
            <option value="June">יוני</option>
            <option value="July">יולי</option>
            <option value="August">אוגוסט</option>
            <option value="September">ספטמבר</option>
            <option value="October">אוקטובר</option>
            <option value="November">נובמבר</option>
            <option value="December">דצמבר</option>
          </select>
    );
  }
}

export default SelectMonth;
