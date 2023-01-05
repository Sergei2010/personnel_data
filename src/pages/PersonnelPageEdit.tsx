import React from 'react';
import { useParams } from 'react-router-dom';
import FormStyled from '../components/MyForm/FormStyled';
import FormChakra from '../components/MyForm/FormChakra';
import { personnelsAPI } from '../services/PersonnelsService';

const PersonnelPageEdit = () => {
  const { id } = useParams();
  const { data: personnel = {} } = personnelsAPI.useFetchPersonnelQuery({ id });

  return (
    <>
      <h2>PersonnelPageEdit</h2>
      <ul>
        {personnel &&
          Object.keys(personnel).map((prop: string | any, i: number) => (
            <li key={i}>
              {prop} : {Object.values(personnel)[i]}
            </li>
          ))}
      </ul>
      <FormStyled {...Object.values(personnel)} />
      <FormChakra {...Object.values(personnel)} />
    </>
  );
};

export default PersonnelPageEdit;
