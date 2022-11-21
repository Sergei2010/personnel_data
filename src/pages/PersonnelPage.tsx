import React from 'react';
import { useLocation } from 'react-router-dom';

import PersonnelView from '../components/Personnels/PersonnelView';
import { IPersonnel } from '../models/IPersonnel';

const PersonnelPage = (props: IPersonnel) => {
  const location = useLocation();
  //console.log(props, ' props');
  //console.log(location, ' useLocation Hook');

  const data = location.state?.data;
  //console.log('data', data);

  return <PersonnelView {...data} />;
};
export default PersonnelPage;
