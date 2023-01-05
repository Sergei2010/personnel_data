/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Styles from './Styles';
import { Form, Field } from 'react-final-form';

const sleep = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  console.log('Saving', values);
  await sleep(500);
  window.alert(JSON.stringify(values, null, 2));
};

const normalizePhone = (value: any) => {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) return onlyNums;
  if (onlyNums.length <= 7) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`;
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};

const FormStyled = (props: string[]) => {
  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <>
              <div>
                <label>ID</label>
                <Field
                  name="id"
                  component="input"
                  type="text"
                  placeholder={props[0]}
                  value={props[0]}
                />
              </div>
              <div>
                <label>AvatarUrl</label>
                <Field
                  name="avatarUrl"
                  component="input"
                  type="text"
                  placeholder={props[1]}
                  value={props[1]}
                />
              </div>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder={props[2]}
                  value={props[2]}
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder={props[3]}
                  value={props[3]}
                />
              </div>
              <div>
                <label>UserTag</label>
                <Field
                  name="userTag"
                  component="input"
                  type="text"
                  placeholder={props[4]}
                  value={props[4]}
                />
              </div>
              <div>
                <label>Departament</label>
                <Field name="departament" component="select">
                  <option value="android">android</option>
                  <option value="iOS">iOS</option>
                  <option value="design">design</option>
                  <option value="management">management</option>
                  <option value="qa">qa</option>
                  <option value="back_office">back_office</option>
                  <option value="frontend">frontend</option>
                  <option value="hr">hr</option>
                  <option value="pr">pr</option>
                  <option value="backend">backend</option>
                  <option value="support">support</option>
                  <option value="analytics">analytics</option>
                </Field>
              </div>
              <div>
                <label>Position</label>
                <Field
                  name="position"
                  component="input"
                  type="text"
                  placeholder={props[6]}
                  value={props[6]}
                />
              </div>
              <div>
                <label>Birthday</label>
                <Field
                  name="birthday"
                  component="input"
                  type="text"
                  placeholder={props[7]}
                  value={props[7]}
                />
              </div>
              <div>
                <label>Phone</label>
                <Field
                  name="phone"
                  component="input"
                  type="text"
                  placeholder={props[8]}
                  value={props[8]}
                  parse={normalizePhone}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                  Reset
                </button>
              </div>
              {console.log('values:', values)}
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </>
          </form>
        )}
      />
    </Styles>
  );
};

export default FormStyled;
