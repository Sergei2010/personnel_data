import React from 'react';
import vector from '../../assets/vector.svg';
import alisa from '../../assets/alisa.svg';

const PersonnelView = () => {
  return (
    <div className="wrapper">
      <div className="view-main">
        <p>
          <img src={vector} alt="Vector" />
        </p>
        <p>
          <img src={alisa} alt="Alisa" />
        </p>
        <p>
          <b>Алиса Иванова</b>
        </p>
        <p>al</p>
        <p>Designer</p>
      </div>
      <div className="view-birthday">2</div>
      <div className="view-phone">3</div>
    </div>
  );
};

export default PersonnelView;
