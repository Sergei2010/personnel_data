import React from 'react';
import magnifyingGlass from '../../assets/left-pointing-magnifying-glass.svg';

const NoPersonnel = () => {
  return (
    <div className="no-personnel">
      <div className="no-personnel-img">
        <img src={magnifyingGlass} alt="Magnifying Glass" />
      </div>
      <div className="no-personnel-title">Мы никого не нашли</div>
      <div className="no-personnel-subtitle">Попробуй скорректировать запрос</div>
    </div>
  );
};

export default NoPersonnel;
