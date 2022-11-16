import React from 'react';

import { IPersonnel } from '../../../models/IPersonnel';
import { useAppSelector } from '../../../hooks/redux';

interface PersonnelsPersonnelItemProps {
  personnel: IPersonnel;
  remove: (post: IPersonnel) => void;
  update: (post: IPersonnel) => void;
}

const PersonnelItem: React.FC<PersonnelsPersonnelItemProps> = ({ personnel, remove, update }) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(personnel);
  };
  const handleUpdate = (event: React.MouseEvent) => {
    const lastName = prompt() || '';
    update({ ...personnel, lastName });
  };
  // added data with personnel's birthday
  const sort = useAppSelector((state) => state.filterReducer.sort);
  const sortProperty = sort.sortProperty;

  /* return (
    <div onClick={handleUpdate}>
      {personnel.id}. {personnel.lastName}
      <button onClick={handleRemove}>Delete</button>
    </div>
  ); */

  return (
    <>
      <li key={personnel.id}>
        <div className="personnel-block-item-card">
          <figure>
            <img src={personnel.avatarUrl} alt="Avatar" />
          </figure>
          <div>
            <p>
              <span>
                {personnel.firstName} {personnel.lastName}
              </span>
              <span> {personnel.userTag}</span>
            </p>
            <p>{personnel.position}</p>
          </div>
        </div>
        <div className="personnel-block-birthday">
          {sortProperty === 'birthday' && personnel.birthday}
        </div>
      </li>
    </>
  );
};

export default PersonnelItem;
