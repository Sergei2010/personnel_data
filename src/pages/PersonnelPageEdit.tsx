import React from 'react';
import { useParams } from 'react-router-dom';
import { personnelsAPI } from '../services/PersonnelsService';

const PersonnelPageEdit = () => {
  const { id } = useParams();
  const { data: personnel } = personnelsAPI.useFetchPersonnelQuery({ id });

  console.log('id:', id);
  console.log('personnel:', personnel);
  return (
    <>
      <div>PersonnelPageEdit</div>
      <ul>
        {personnel &&
          Object.keys(personnel).map((prop: string | any, i: number) => (
            <li key={i}>
              {prop} : {Object.values(personnel)[i]}
            </li>
          ))}
      </ul>
    </>
  );
};

export default PersonnelPageEdit;
