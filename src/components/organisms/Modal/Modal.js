import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { Wrapper, ModalBackground } from 'components/organisms/Modal/Modal.styles';
import { ModalContext } from 'providers/ModalProvider';
import { JobsContext } from 'providers/JobsProvider';
import { InputWrapper } from 'components/organisms/Modal/Modal.styles';
import { ReactComponent as LocationIcon } from 'assets/images/location.svg';

const modalContainer = document.getElementById('modal-container');

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isOpen, handleCloseModal } = useContext(ModalContext);
  const { handleSearchModal } = useContext(JobsContext);
  const modalNode = document.createElement('div');
  const onSubmit = (data) => {
    handleSearchModal(data);
    handleCloseModal();
  };

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalBackground>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <LocationIcon />
          <input type="text" placeholder="Filter by location..." {...register('location')} />
        </InputWrapper>
        <input type="submit" value="Search" />
      </Wrapper>
    </ModalBackground>,
    modalNode
  );
};

export default Modal;
