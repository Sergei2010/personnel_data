import React from 'react';

//import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setModal } from '../../store/reducers/ModalSlice';

type Props = { children: React.ReactNode };

const Modal: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modalReducer.modal);
  return (
    <div
      className={modal ? 'modal active' : 'modal'}
      onClick={(e) => {
        e.preventDefault();
        dispatch(setModal(!modal));
      }}>
      <div
        className={modal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
