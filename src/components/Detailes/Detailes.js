import React, { Component } from 'react';
import CSS from './Detailes.css';

class Detailes extends Component {
    render() {
    return (
      <div className={CSS.Detailes}>
        <div>תאריכי יציאה וחזרה אפשריים<span className={[CSS.Circle,CSS.Blue].join(' ')}></span></div>
        <div className={CSS.Space}>אפשרית טיסת צ'ארטר בתאריכים אלו<span className={[CSS.Circle,CSS.Pink].join(' ')}></span></div>
      </div>
    );
  }
}

export default Detailes;
