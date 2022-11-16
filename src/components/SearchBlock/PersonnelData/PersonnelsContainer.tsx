import React from 'react';

import { IPersonnel } from '../../../models/IPersonnel';
import { personnelsAPI } from '../../../services/PersonnelsService';
import Skeleton from '../../PersonnelsBlock/Skeleton';
import PersonnelsItem from './PersonnelsItem';
import CriticalError from '../../СriticalЕrror';

const PostContainer = () => {
  const [department, setDepartment] = React.useState('all');
  const {
    data: personnels,
    error,
    isLoading,
  } = personnelsAPI.useFetchAllPersonnelsQuery(department);
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

  /* return (
    <div>
      {isLoading && <h1>Идёт загрузка ...</h1>}
      {error && <h1>Произошла ошибка при загрузке ...</h1>}
      <button onClick={handleCreate}>Add new post</button>
      <ul>
        {personnels &&
          personnels.map((personnel: IPersonnel) => (
            <PersonnelsItem
              remove={handleRemove}
              update={handleUpdate}
              personnel={personnel}
              key={personnel.id}
            />
          ))}
      </ul>
    </div>
  ); */
  return (
    <div className="wrapper">
      <div className="personnel-block">
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
              {personnels &&
                personnels.map((personnel: IPersonnel) => (
                  <PersonnelsItem
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

export default PostContainer;
