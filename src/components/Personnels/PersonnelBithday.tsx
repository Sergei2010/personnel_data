import React from 'react';
import { DateTime } from 'luxon';

import { ISort } from '../../models/ISort';
import { IBirthday } from '../../models/IBirthday';
import { useAppSelector } from '../../hooks/redux';

const PersonnelBithday = ({ birthday }: IBirthday) => {
  const sort: ISort = useAppSelector((state) => state.filterReducer.sort);
  const sortProperty = sort.sortProperty;

  const dt = DateTime.fromISO(birthday).setLocale('ru').toFormat('d LLL');
  //console.log('dt: ', dt);

  return <div className="personnel-block-birthday">{sortProperty === 'birthday' && dt}</div>;
};

export default PersonnelBithday;
