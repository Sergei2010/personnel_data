import React from 'react';
import { Link } from 'react-router-dom';

import { IPersonnel } from '../../models/IPersonnel';
import PersonnelBithday from './PersonnelBithday';
import { getBirthdayStr } from '../../utils/variables_functions';

interface PersonnelsPersonnelItemProps {
  personnel: IPersonnel;
  remove: (post: IPersonnel) => void;
  update: (post: IPersonnel) => void;
}

const PersonnelItem: React.FC<PersonnelsPersonnelItemProps> = ({ personnel, remove, update }) => {
  const [data, setData] = React.useState(personnel);
  const date = getBirthdayStr(personnel.birthday!);
  //console.log('date', date);
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(personnel);
  };
  /* const handleUpdate = (event: React.MouseEvent) => {
    const lastName = prompt() || '';
    update({ ...personnel, lastName });
  }; */

  // добавляю новое значение для текущего ДР
  const handleUpdate = (birthdayNext: string) => {
    update({ ...personnel, birthdayNext });
  };

  React.useEffect(() => {
    handleUpdate(date);
  }, []);

  return (
    <>
      <Link to={`${personnel.id}`} state={{ data: data }} className="personnel-block">
        <li key={personnel.id}>
          <div>
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
          <PersonnelBithday birthday={personnel.birthdayNext!} />
        </li>
      </Link>
    </>
  );
};

export default PersonnelItem;
