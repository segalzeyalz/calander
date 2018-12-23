import React, { Component } from 'react';
import CSS from './Detailes.css';

class Detailes extends Component {
    render() {
    return (
      <div className={CSS.Detailes}>
        <div className={[CSS.Circle,CSS.Blue].join(' ')}>תאריכי יציאה וחזרה אפשריים</div>
        <div className={[CSS.Circle,CSS.Pink].join(' ')}>אפשרית טיסת צ'ארטר בתאריכים אלו</div>
      </div>
    );
  }
}

export default Detailes;
