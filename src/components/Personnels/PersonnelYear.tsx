import React from 'react';
import { DateTime } from 'luxon';

import { IPersonnel } from '../../models/IPersonnel';

const PersonnelYear = ({ firstName, birthdayNext }: IPersonnel) => {
  //let year;
  //if (birthdayNext) {
  //year = DateTime.fromISO(birthdayNext).year;
  //}
  const year = DateTime.fromISO(birthdayNext!).year;

  return (
    <div className="personnel-year-block" data-name={firstName!}>
      <div>
        <p className="personnel-year-block-line"></p>
        <p className="personnel-year-block-text">{year}</p>
        <p className="personnel-year-block-line"></p>
      </div>
    </div>
  );
};

export default PersonnelYear;
