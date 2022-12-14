import React from 'react';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

import vector from '../../assets/vector.svg';
import star from '../../assets/star.svg';
import phone from '../../assets/phone.svg';
import { IPersonnel } from '../../models/IPersonnel';
import { text } from '../../utils/transformFunctions';

const PersonnelView = (props: IPersonnel) => {
  const dt = (t: string) => DateTime.fromISO(t);
  const birthday = props.birthday ? dt(props.birthday).setLocale('ru').toFormat('d LLL') : null;
  const yearNow = DateTime.local().year;
  const yearBirthday = props.birthday ? dt(props.birthday).year : null;
  const yearOld = yearBirthday ? yearNow - yearBirthday : 'No data available ...';
  const str = (year: number | string) => {
    if (typeof year === 'number') {
      return text(year);
    } else {
      return <b>No data available ...</b>;
    }
  };

  return (
    <div className="wrapper">
      <div className="view-btn">
        <Link to="/personnels">
          <img src={vector} alt="Vector" />
        </Link>
        <Link to={`/personnels/${props.id}/edit`}>
          <p>Редактировать</p>
        </Link>
      </div>
      <ul className="view-main">
        <li>
          <img src={props.avatarUrl} alt="Alisa" />
        </li>
        <li>
          <b>
            {props.firstName} {props.lastName}
          </b>
          <span>{props.userTag}</span>
        </li>
        <li>
          <span>{props.position}</span>
        </li>
        <li></li>
      </ul>
      <div className="view-birthday">
        <p>
          <img src={star} alt="Star" />
        </p>
        <p>
          <span>{birthday}</span>
          <span>
            <>
              {yearOld} {str(yearOld)}
            </>
          </span>
        </p>
      </div>
      <div className="view-phone">
        <p>
          <img src={phone} alt="Phone" />
        </p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
};

export default PersonnelView;
