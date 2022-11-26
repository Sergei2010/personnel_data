import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { IPersonnel } from '../../models/IPersonnel';
import { useAppSelector } from '../../hooks/redux';
import { personnelsAPI } from '../../services/PersonnelsService';
import Skeleton from '../../exampl_box/_PersonnelsBlock/Skeleton';
import PersonnelItem from './PersonnelItem';
import CriticalError from '../СriticalЕrror';
import PersonnellYear from './PersonnelYear';

const PersonnelsContainer = () => {
  const navigate = useNavigate();
  const department = useAppSelector((state) => state.filterReducer.department);
  let { sortProperty } = useAppSelector((state) => state.filterReducer.sort);
  sortProperty = sortProperty === 'lastName' ? 'lastName' : 'birthdayNext';
  const {
    data: personnels,
    error,
    isLoading,
  } = personnelsAPI.useFetchAllPersonnelsQuery({ department, sortProperty });

  const [createPersonnel, { error: createError, isLoading: isCreateLoading }] =
    personnelsAPI.useCreatePersonnelMutation();
  const [deletePersonnel, {}] = personnelsAPI.useDeletePersonnelMutation();
  const [updatePersonnel, {}] = personnelsAPI.useUpdatePersonnelMutation();

  const handleCreate = async () => {
    let personnelData = {};
    const firstName = prompt();
    personnelData = { ...personnelData, firstName };
    const lastName = prompt();
    personnelData = { ...personnelData, lastName };
    const avatarUrl = prompt();
    personnelData = { ...personnelData, avatarUrl };
    const userTag = prompt();
    personnelData = { ...personnelData, userTag };
    const department = prompt();
    personnelData = { ...personnelData, department };
    const position = prompt();
    personnelData = { ...personnelData, position };
    const birthday = prompt();
    personnelData = { ...personnelData, birthday };
    const phone = prompt();
    personnelData = { ...personnelData, phone };

    await createPersonnel({ personnelData, body: personnelData } as unknown as IPersonnel);
  };

  const handleRemove = async (personnel: IPersonnel) => {
    deletePersonnel(personnel);
  };
  const handleUpdate = async (personnel: IPersonnel) => {
    updatePersonnel(personnel);
  };

  /* React.useEffect(() => {
    const queryString = qs.stringify({
      q: department === 'all' ? '' : department,
      department: department !== 'all' ? department : '',
      _sort: sortProperty,
      //searchValue
    });

    navigate(`?${queryString}`);
  }, [department, sortProperty, searchValue, navigate]); */

  React.useEffect(() => {
    let queryString;
    if (department === 'all') {
      queryString = qs.stringify({
        q: '',
        _sort: sortProperty,
        //searchValue
      });
    } else {
      queryString = qs.stringify({
        department,
        _sort: sortProperty,
        //searchValue
      });
    }
    navigate(`?${queryString}`);
  }, [department, sortProperty, /* searchValue, */ navigate]);

  return (
    <div className="wrapper">
      <div className="personnels-block">
        {/* code || */ error && <CriticalError />}
        {
          /* !code && */ isLoading &&
            [...new Array(3)].map((item, index) => {
              return <Skeleton key={index} />;
            })
        }
        {
          /* !code && */ !isLoading && (
            <ul>
              <PersonnellYear />
              {personnels &&
                personnels.map((personnel: IPersonnel) => (
                  <PersonnelItem
                    remove={handleRemove}
                    update={handleUpdate}
                    personnel={personnel}
                    key={personnel.id}
                  />
                ))}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default PersonnelsContainer;
