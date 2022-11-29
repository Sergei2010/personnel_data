import React from 'react';
//import { DateTime } from 'luxon';
import { getTimeForZero } from '../../utils/transformFunctions';

//const nextYearFromNow = DateTime.now().year + 1;
//const dt = DateTime.local(nextYearFromNow, 1, 1).setLocale('ru').toISO();
const dt = getTimeForZero();

export const zeroPersonnel = {
  avatarUrl: '',
  birthday: '',
  birthdayNext: dt,
  department: '',
  firstName: 'zeroPersonnel',
  lastName: 'zeroPersonnel',
  id: 'aaa',
  phone: '',
  useTag: '',
  position: '',
};

const ZeroPersonnel = () => {
  return <div>{zeroPersonnel.firstName}</div>;
};

export default ZeroPersonnel;
